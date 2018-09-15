CREATE TABLE [QC_�ṹ��] (
	[object_id] [char] (36) COLLATE Chinese_PRC_CI_AS NOT NULL CONSTRAINT [DF_QC_�ṹ��_object_id] DEFAULT (newid()),
	[�ṹ��] [varchar] (50) COLLATE Chinese_PRC_CI_AS NULL ,
	[״̬] [varchar] (50) COLLATE Chinese_PRC_CI_AS NULL ,
	[���] [decimal](18, 2) NULL CONSTRAINT [DF_QC_�ṹ��_���] DEFAULT (2),
	[����ʱ��] [datetime] NULL CONSTRAINT [DF_QC_�ṹ��_����ʱ��] DEFAULT (getdate()),
	[�����˱��] [varchar] (50) COLLATE Chinese_PRC_CI_AS NULL ,
	[����������] [varchar] (50) COLLATE Chinese_PRC_CI_AS NULL ,
	CONSTRAINT [PK_QC_�ṹ��] PRIMARY KEY  CLUSTERED 
	(
		[object_id]
	)  ON [PRIMARY] 
) ON [PRIMARY]
GO



CREATE TABLE [QC_���۱�] (
	[object_id] [char] (36) COLLATE Chinese_PRC_CI_AS NOT NULL CONSTRAINT [DF_������_object_id] DEFAULT (newid()),
	[�ṹ��id] [char] (36) COLLATE Chinese_PRC_CI_AS NULL ,
	[�ṹ��] [varchar] (50) COLLATE Chinese_PRC_CI_AS NULL ,
	[��] [varchar] (10) COLLATE Chinese_PRC_CI_AS NULL ,
	[��] [varchar] (10) COLLATE Chinese_PRC_CI_AS NULL ,
	[��] [varchar] (10) COLLATE Chinese_PRC_CI_AS NULL ,
	[����] [decimal](18, 2) NULL ,
	[����] [decimal](18, 2) NULL ,
	[������] [decimal](18, 2) NULL ,
	[���ݷ�] [decimal](18, 2) NULL ,
	[��Ʊ˰] [decimal](18, 0) NULL ,
	[�ܷ���] [decimal](18, 2) NULL ,
	[Ѻ��] [decimal](18, 2) NULL ,
	[���] [decimal](18, 2) NULL ,
	[ˮ��] [decimal](18, 2) NULL ,
	[������] [varchar] (10) COLLATE Chinese_PRC_CI_AS NULL ,
	[����ʱ��] [datetime] NULL CONSTRAINT [DF_QC_���۱�_����ʱ��] DEFAULT (getdate()),
	[�����˱��] [varchar] (50) COLLATE Chinese_PRC_CI_AS NULL ,
	[�޸���] [varchar] (1) COLLATE Chinese_PRC_CI_AS NULL ,
	[�޸��˱��] [varchar] (50) COLLATE Chinese_PRC_CI_AS NULL ,
	[�޸�ʱ��] [datetime] NULL 
) ON [PRIMARY]
GO


