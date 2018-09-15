CREATE TABLE [QC_结构号] (
	[object_id] [char] (36) COLLATE Chinese_PRC_CI_AS NOT NULL CONSTRAINT [DF_QC_结构号_object_id] DEFAULT (newid()),
	[结构号] [varchar] (50) COLLATE Chinese_PRC_CI_AS NULL ,
	[状态] [varchar] (50) COLLATE Chinese_PRC_CI_AS NULL ,
	[面积] [decimal](18, 2) NULL CONSTRAINT [DF_QC_结构号_面积] DEFAULT (2),
	[创建时间] [datetime] NULL CONSTRAINT [DF_QC_结构号_创建时间] DEFAULT (getdate()),
	[创建人编号] [varchar] (50) COLLATE Chinese_PRC_CI_AS NULL ,
	[创建人姓名] [varchar] (50) COLLATE Chinese_PRC_CI_AS NULL ,
	CONSTRAINT [PK_QC_结构号] PRIMARY KEY  CLUSTERED 
	(
		[object_id]
	)  ON [PRIMARY] 
) ON [PRIMARY]
GO



CREATE TABLE [QC_定价表] (
	[object_id] [char] (36) COLLATE Chinese_PRC_CI_AS NOT NULL CONSTRAINT [DF_定单表_object_id] DEFAULT (newid()),
	[结构号id] [char] (36) COLLATE Chinese_PRC_CI_AS NULL ,
	[结构号] [varchar] (50) COLLATE Chinese_PRC_CI_AS NULL ,
	[年] [varchar] (10) COLLATE Chinese_PRC_CI_AS NULL ,
	[月] [varchar] (10) COLLATE Chinese_PRC_CI_AS NULL ,
	[日] [varchar] (10) COLLATE Chinese_PRC_CI_AS NULL ,
	[单价] [decimal](18, 2) NULL ,
	[房租] [decimal](18, 2) NULL ,
	[卫生费] [decimal](18, 2) NULL ,
	[电梯费] [decimal](18, 2) NULL ,
	[开票税] [decimal](18, 0) NULL ,
	[总费用] [decimal](18, 2) NULL ,
	[押金] [decimal](18, 2) NULL ,
	[电费] [decimal](18, 2) NULL ,
	[水费] [decimal](18, 2) NULL ,
	[创建人] [varchar] (10) COLLATE Chinese_PRC_CI_AS NULL ,
	[创建时间] [datetime] NULL CONSTRAINT [DF_QC_定价表_创建时间] DEFAULT (getdate()),
	[创建人编号] [varchar] (50) COLLATE Chinese_PRC_CI_AS NULL ,
	[修改人] [varchar] (1) COLLATE Chinese_PRC_CI_AS NULL ,
	[修改人编号] [varchar] (50) COLLATE Chinese_PRC_CI_AS NULL ,
	[修改时间] [datetime] NULL 
) ON [PRIMARY]
GO


