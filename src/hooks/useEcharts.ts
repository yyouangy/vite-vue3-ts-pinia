import echarts, { type ECOption } from '@/utils/echarts';
import { useDebounceFn } from '@vueuse/core';
import { useThemeStore } from '@/store/modules/theme';
import { watch, onBeforeUnmount, markRaw, Ref } from 'vue';

export const useEcharts = (elRef: HTMLDivElement, options: Ref<ECOption>) => {
  let myChart: echarts.ECharts | null = null;
  
  // 获取store的主题配置
  const themeStore = useThemeStore();
  
  // 初始化
  const initCharts = () => {
    // 适配暗黑主题
    const theme = themeStore.isDark ? 'dark' : 'default';
    myChart = markRaw(echarts.init(elRef, theme));
    setOptions(options.value);
  };

  // 设置echarts
  const setOptions = (updateOptions: ECOption) => {
    myChart && myChart.setOption({ ...updateOptions, backgroundColor: 'transparent' });
  };

 // 屏幕适配，这里使用了一个防抖
  const resize = useDebounceFn(() => {
    myChart && myChart.resize();
  }, 200);

  // 初始化执行
  initCharts();

  // 监听options
  watch(
    options,
    (newValue) => {
      setOptions(newValue);
    },
    { deep: true }
  );

  // 暗黑适配
  watch(
    () => themeStore.isDark,
    () => {
      if (myChart) {
        myChart.dispose();
        initCharts();
      }
    }
  );

  window.addEventListener('resize', resize);
  
  // 清除副作用
  onBeforeUnmount(() => {
    if (!myChart) return;
    window.removeEventListener('resize', resize);
    myChart.dispose();
  });

  // 暴露变量和方法
  return {
    myChart
  };
};

