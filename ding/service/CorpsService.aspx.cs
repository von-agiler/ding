using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

[charming.web.不需要身份认证]
public partial class service_CorpsService : charming.web.DataPage
{

    protected override string process(Type domain_type, Newtonsoft.Json.Linq.JObject user_params)
    {
        string api = this.Request["api"] as string;
        charming.data.TableDataGateway db = new charming.data.TableDataGateway();

        if (api == "all")
        {
            charming.data.Table t = new charming.data.Table();

            string sql = "select * from QC_企业介绍";

            new charming.data.TableDataGateway().Query(t, sql);

            return Serialize(t);

        }

        if (api == "top-n")
        {
            int n = int.Parse(this.Request["n"]);

            charming.data.Table t = new charming.data.Table();

            string sql = "select top " + n.ToString() + " * from QC_企业介绍";

            new charming.data.TableDataGateway().Query(t, sql);

            return Serialize(t);

        }

        if (api == "query")
        {
            string key = this.Request["key"] as string;

            charming.data.Table t = new charming.data.Table();

            string sql = "select * from QC_企业介绍"
                + " where 主营业务 like @1 or 客户名称 like @1 or 企业简介 like @1";

            new charming.data.TableDataGateway().Query(t, sql, "%" + key + "%");

            return Serialize(t);

        }


        return null;


    }
}