using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class test : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        System.Data.DataTable dt = new System.Data.DataTable();
        dt.TableName = "QC_结构号";
        new charming.data.TableDataGateway().LoadAll(dt);

        this.GridView1.DataSource = dt;

        this.GridView1.DataBind();

        return;

    }
}