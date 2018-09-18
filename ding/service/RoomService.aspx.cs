using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

[charming.web.不需要身份认证]
public partial class service_RoomService : charming.web.DataPage
{

    public class 查询返回包
    {
        public charming.data.Table 层_list;

        public charming.data.Table 状态_list;

    }



    protected override string process(Type domain_type, Newtonsoft.Json.Linq.JObject user_params)
    {
        string api = this.Request["api"] as string;


        if (api == "query")
        {

            string 状态 = this.Request["状态"] as string;

            charming.data.TableDataGateway db = new charming.data.TableDataGateway();

            charming.data.Table 层_list = new charming.data.Table();
            charming.data.Table 状态_list = new charming.data.Table();

            string sql =
                "select distinct substring(结构号,2,1) + '-' + substring(结构号,3,1) as 层 from QC_结构号"
                + " where 状态=@1 or @1='all'";


            new charming.data.TableDataGateway().Query(层_list, sql, 状态);
            

            sql =
               //"select 结构号,状态 from QC_结构号"
               "select A.结构号,A.面积,A.状态,B.门牌号 from QC_结构号 A left outer join QC_结构号列表 B on(A.结构号= B.结构号)"
               + " where 状态=@1 or @1='all'";


            new charming.data.TableDataGateway().Query(状态_list, sql, 状态);


            查询返回包 result = new 查询返回包();
            result.层_list = 层_list;
            result.状态_list = 状态_list;

            return Serialize(result);
        }

        return null;





    }


}