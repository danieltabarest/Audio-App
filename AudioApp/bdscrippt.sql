create database [AudioAppBD]
 go
USE [AudioAppBD]
GO
/****** Object:  Table [AGM].[Anexos]    Script Date: 8/05/2018 6:37:12 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Anexos](
	[idAnexo] [int] IDENTITY(1,1) NOT NULL,
	[ID] [uniqueidentifier] NULL,
	[URL] [varchar](200) NOT NULL,
	[CodNivel] [varchar](20) NULL,
	[idVisita] [int] NOT NULL,
	[idUPM] [int] NULL,
	[idLugarTrabajo] [int] NULL,
	[Descripcion] [varchar](150) NULL,
	[Tipo] [varchar](50) NULL,
	[UsuarioCreacion] [varchar](20) NULL,
	[FechaCreacion] [datetime] NULL,
	[UsuarioModificacion] [varchar](20) NULL,
	[FechaModificacion] [datetime] NULL,
	[idEstado] [int] NOT NULL,
 CONSTRAINT [PK__Anexos__A3A70BAA02928162] PRIMARY KEY CLUSTERED 
(
	[idAnexo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[Anexos] ON 

GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (1, N'5a20beae-5d24-4820-a0db-0695e2c1ccd1', N'D:\home\site\wwwroot\UploadedFiles\78c43caf-689e-4783-acfe-421a01d82451..mp4', N'UPM', 48, 42, 0, N'VID_20171112_113232399.mp4', N'.mp4', N'admin', CAST(N'2017-11-27T14:26:00.000' AS DateTime), NULL, NULL, 7)
GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (2, N'82db3042-5f05-4e2d-9a18-56e39124fad5', N'D:\home\site\wwwroot\UploadedFiles\c6eae320-cccb-4b85-95b1-fb0f5f82a9f9..jpg', N'UPM', 49, 42, 0, N'20171115194444140', N'.jpg', N'admin', CAST(N'2017-11-27T14:26:00.000' AS DateTime), NULL, NULL, 7)
GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (3, N'e4413aa5-4c3e-40c0-b773-d7ee1da1dd10', N'https://appgestionmineraweb.scm.azurewebsites.net/dev/api/files/wwwroot/UploadedFiles/f3e0ca9a-e04e-46fe-a643-e54b93376fc0..jpg', N'UPM', 50, 42, 0, N'20171115194444470', N'.jpg', N'admin', CAST(N'2017-11-27T14:26:00.000' AS DateTime), NULL, NULL, 7)
GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (4, N'f4952e85-8456-4ad0-bbd4-1101851dc361', N'D:\home\site\wwwroot\UploadedFiles\23af69df-fc42-46a7-b792-2e22796485e2.jpg', N'UPM', 51, 57, 0, N'20171115200511943', N'.jpg', N'admin', CAST(N'2017-11-27T14:26:00.000' AS DateTime), NULL, NULL, 7)
GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (5, N'1d54d7bd-1f0b-49a1-b7f2-9a2bc8e976ef', N'D:\home\site\wwwroot\UploadedFiles\4161e6af-cd0e-48a2-abfe-b3dc8a01aa38.jpg', N'UPM', 52, 57, 0, N'20171115200512211', N'.jpg', N'admin', CAST(N'2017-11-27T14:26:00.000' AS DateTime), NULL, NULL, 7)
GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (6, N'270b19d1-8922-4249-bc54-a2ae23ea4332', N'D:\home\site\wwwroot\UploadedFiles\f3e0ca9a-e04e-46fe-a643-e54b93376fc0.jpg', N'UPM', 53, 60, 0, N'20171116092813252', N'.jpg', N'admin', CAST(N'2017-11-27T14:26:00.000' AS DateTime), NULL, NULL, 7)
GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (7, N'd9f219c0-d159-4563-970a-f3bcd3f4cf06', N'D:\home\site\wwwroot\UploadedFiles\ea479003-801b-4250-8629-fcdb3b7941ba.mp4', N'UPM', 54, 62, 0, N'VID-20171103-WA0008_2.mp4', N'.mp4', N'admin', CAST(N'2017-11-27T14:26:00.000' AS DateTime), NULL, NULL, 7)
GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (8, N'cdbd730a-239b-4cc0-873b-85e654d4019a', N'D:\home\site\wwwroot\UploadedFiles\1D194349-025C-4132-80C6-CDA080503C90.jpg', N'UPM', 63, 6, 0, N'1.jpg', N'.jpg', N'siso1', CAST(N'2017-12-03T23:02:59.480' AS DateTime), N'siso1', CAST(N'2017-12-03T23:02:59.480' AS DateTime), 7)
GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (9, N'7360f3b2-9ed6-4770-9609-6e70b303c127', N'D:\home\site\wwwroot\UploadedFiles\7360f3b2-9ed6-4770-9609-6e70b303c127.jpg', N'UPM', 82, 78, 0, N'1.jpg', N'.jpg', N'siso1', CAST(N'2017-12-11T03:06:06.373' AS DateTime), N'siso1', CAST(N'2017-12-11T03:06:06.373' AS DateTime), 7)
GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (12, N'8db4a5c0-d23d-4ad8-ab13-b80bd2a209dd', N'D:\home\site\wwwroot\UploadedFiles\8db4a5c0-d23d-4ad8-ab13-b80bd2a209dd.mp4', N'UPM', 84, 41, 0, N'mobizen_20171130_152943.mp4', N'.mp4', N'siso1', CAST(N'2017-12-11T03:30:09.620' AS DateTime), N'siso1', CAST(N'2017-12-11T03:30:09.620' AS DateTime), 7)
GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (13, N'4d5fc47d-23d9-4649-9f07-e841641c7f08', N'D:\home\site\wwwroot\UploadedFiles\4d5fc47d-23d9-4649-9f07-e841641c7f08.jpg', N'UPM', 96, 50, 0, N'1.jpg', N'.jpg', N'siso1', CAST(N'2018-01-10T16:18:40.650' AS DateTime), N'siso1', CAST(N'2018-01-10T16:18:40.650' AS DateTime), 7)
GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (14, N'78d382bc-9769-434b-a8cd-8bc91ac32d2d', N'D:\home\site\wwwroot\UploadedFiles\78d382bc-9769-434b-a8cd-8bc91ac32d2d.mp4', N'UPM', 96, 50, 0, N'2.mp4', N'.mp4', N'siso1', CAST(N'2018-01-10T16:18:40.650' AS DateTime), N'siso1', CAST(N'2018-01-10T16:18:40.650' AS DateTime), 7)
GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (17, N'41bf919f-3045-4e6b-9304-209b2caee374', N'D:\home\site\wwwroot\UploadedFiles\41bf919f-3045-4e6b-9304-209b2caee374.jpg', N'UPM', 98, 50, 0, N'20180110174858201', N'.jpg', N'siso1', CAST(N'2018-01-10T22:51:12.537' AS DateTime), N'siso1', CAST(N'2018-01-10T22:51:12.537' AS DateTime), 7)
GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (18, N'704320de-2178-4888-b68e-d8ebae792dd8', N'D:\home\site\wwwroot\UploadedFiles\704320de-2178-4888-b68e-d8ebae792dd8.mp4', N'UPM', 98, 50, 0, N'VID-20180106-WA0000.mp4', N'.mp4', N'siso1', CAST(N'2018-01-10T22:51:12.537' AS DateTime), N'siso1', CAST(N'2018-01-10T22:51:12.537' AS DateTime), 7)
GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (19, N'a6c82f97-2e5a-48bf-8304-44bd5d59858d', N'D:\home\site\wwwroot\UploadedFiles\a6c82f97-2e5a-48bf-8304-44bd5d59858d.jpg', N'UPM', 98, 50, 0, N'1.jpg', N'.jpg', N'siso1', CAST(N'2018-01-10T22:51:12.537' AS DateTime), N'siso1', CAST(N'2018-01-10T22:51:12.537' AS DateTime), 7)
GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (20, N'c0614518-9a18-4b64-8d46-64fa5185a3c2', N'D:\home\site\wwwroot\UploadedFiles\c0614518-9a18-4b64-8d46-64fa5185a3c2.jpg', N'UPM', 98, 50, 0, N'20180110174857171', N'.jpg', N'siso1', CAST(N'2018-01-10T22:51:12.537' AS DateTime), N'siso1', CAST(N'2018-01-10T22:51:12.537' AS DateTime), 7)
GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (21, N'd417b4b5-f9d2-4de7-ae2b-bebc2d76b6e1', N'D:\home\site\wwwroot\UploadedFiles\d417b4b5-f9d2-4de7-ae2b-bebc2d76b6e1.jpg', N'UPM', 100, 87, 0, N'1.jpg', N'.jpg', N'Brmejiac', CAST(N'2018-01-15T16:10:31.510' AS DateTime), N'Brmejiac', CAST(N'2018-01-15T16:10:31.510' AS DateTime), 7)
GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (22, N'a5e0e297-b15c-4570-bcff-f82ba14bd49d', N'D:\home\site\wwwroot\UploadedFiles\a5e0e297-b15c-4570-bcff-f82ba14bd49d.jpg', N'UPM', 105, 113, 0, N'2.jpg', N'.jpg', N'galileozapata', CAST(N'2018-01-18T20:39:18.063' AS DateTime), N'galileozapata', CAST(N'2018-01-18T20:39:18.063' AS DateTime), 7)
GO
INSERT [dbo].[Anexos] ([idAnexo], [ID], [URL], [CodNivel], [idVisita], [idUPM], [idLugarTrabajo], [Descripcion], [Tipo], [UsuarioCreacion], [FechaCreacion], [UsuarioModificacion], [FechaModificacion], [idEstado]) VALUES (23, N'55820834-27ec-4362-8b7e-804e315fcdde', N'D:\home\site\wwwroot\UploadedFiles\55820834-27ec-4362-8b7e-804e315fcdde.jpg', N'UPM', 106, 114, 0, N'1.jpg', N'.jpg', N'galileozapata', CAST(N'2018-01-18T21:26:09.947' AS DateTime), N'galileozapata', CAST(N'2018-01-18T21:26:09.947' AS DateTime), 7)
GO
SET IDENTITY_INSERT [dbo].[Anexos] OFF

GO
GO
