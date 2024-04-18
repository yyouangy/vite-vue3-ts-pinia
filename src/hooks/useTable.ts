import { reactive, ref } from 'vue';

interface RequestResult<T = any> {
    code: number;
    message: string;
    data: T;
}
  
interface TableResult<T = any> {
    total: number;
    list: T[];
}
  
type RequestTableResult<T = any> = RequestResult<TableResult<T> | T>;

interface Options<T = any> {
  // api
  apiFn: (params: any) => Promise<RequestTableResult>;
  // api请求参数
  params?: Recordable;
  // api返回值不是约定的TableResult的处理
  callback?: (data: any) =>TableResult<T>;
  // 显示分页数据
  isPageable?: boolean;
  // 立即执行getList函数
  immediate?: boolean;
}

export const useTable = <T = any>(options: Options) => {
  // 列表数据
  const tableData = ref<T[]>([]);
  // loading变量
  const loading = ref<boolean>(false);
  // 请求参数 (搜索字段)
  const paramsInit = JSON.parse(JSON.stringify(options.params || {}));
  // 分页数据
  const page = reactive({
    page: 1,
    pageSize: 10,
    pageSizes: [10, 20, 30, 50],
    total: 10
  });

  const getList = async () => {
    loading.value = true;
    const isPageable = options.isPageable ?? true;
    // 根据传入的isPageable属性判断列表请求是否携带分页参数
    const pageParams = isPageable ? { page: page.page, pageSize: page.pageSize } : {};
    // 总的请求参数
    const totalParams = Object.assign({}, options.params, pageParams);

    console.log(totalParams);
    
    let { data :{data}} = await options.apiFn(totalParams).finally(() => (loading.value = false));
    console.log(data);
    
    // 如果后端返回格式不规范，需要传入回调处理成我们想要的格式
    options.callback && (data = options.callback(data));
    // 根据是否分页取值，所以如果接口格式不正确可以传入cb处理
    tableData.value = isPageable ? data.list : data;
    console.log(tableData);
    
    page.total = data.total;
  };

  // 页码总数切换
  const handleSizeChange = async (val: number) => {
    page.page = 1;
    page.pageSize = val;
    await getList();
  };

  // 分页切换
  const handleCurrentChange = async (val: number) => {
    page.page = val;
    await getList();
  };

  // 重置搜索数据
  const resetParams = () => {
    Object.keys(paramsInit).forEach((item) => {
      options.params![item] = paramsInit[item];
    });
    getList();
  };
  
//是否默认执行getList
if (options.immediate ?? true) getList();

// 返回相关需要的变量和方法
  return {
    tableData,
    page,
    loading,
    getList,
    resetParams,
    handleSizeChange,
    handleCurrentChange
  };
};

