using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

[charming.web.不需要身份认证]
public partial class service_CorpsService : charming.web.DataPage
{

    public class 企业信息返回包
    {
        public charming.data.Table QC_企业介绍;

        public string 全景地图;
    }

    protected override string process(Type domain_type, Newtonsoft.Json.Linq.JObject user_params)
    {
        string api = this.Request["api"] as string;
        charming.data.TableDataGateway db = new charming.data.TableDataGateway();

        if (api == "all")
        {
            charming.data.Table t = new charming.data.Table();

            string sql = "select * from QC_企业介绍";

            db.Query(t, sql);

            return Serialize(t);

        }

        if (api == "byID")
        {
            string id = this.Request["id"] as string;

            charming.data.Table t = new charming.data.Table();

            string sql = "select * from QC_企业介绍 where object_id=@1";

            db.Query(t, sql, id);

            

            企业信息返回包 result = new 企业信息返回包();
            result.QC_企业介绍 = t;

            result.全景地图= db.ExecuteScalar("select 全景地图 from QC_客户资料 where object_id=@1", t[0].GetDataRow()["客户ID"]) as string;

            return Serialize(result);

        }

        if (api == "top-n")
        {
            int n = int.Parse(this.Request["n"]);

            charming.data.Table t = new charming.data.Table();

            string sql = "select top " + n.ToString() + " * from QC_企业介绍";

            db.Query(t, sql);

            return Serialize(t);

        }

        if (api == "query")
        {
            string key = this.Request["key"] as string;

            charming.data.Table t = new charming.data.Table();

            string sql = "select * from QC_企业介绍"
                + " where 主营业务 like @1 or 客户名称 like @1 or 企业简介 like @1";

            db.Query(t, sql, "%" + key + "%");

            return Serialize(t);

        }


        return null;


    }
}