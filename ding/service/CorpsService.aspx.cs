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


        if (api == "all")
        {

            charming.data.TableDataGateway db = new charming.data.TableDataGateway();

            charming.data.Table t = new charming.data.Table();

            string sql = "select * from QC_企业介绍";

            new charming.data.TableDataGateway().Query(t, sql);

            return Serialize(t);

        }

        return null;


    }
}