USE [AudioAppBD]
GO
/****** Object:  StoredProcedure [dbo].[UspSetAnexos]    Script Date: 9/05/2018 1:20:33 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[UspSetAnexos]
(
	@ID uniqueidentifier
	,@URL varchar(200)
	,@CodNivel varchar(20)
	,@idVisita int
	,@idUPM int
	,@idLTrabajo uniqueidentifier
	,@Descripcion varchar(150)

	,@Tipo varchar(50)
	,@UsuarioCreacion varchar(20)
	,@UsuarioModificacion varchar
	,@FechaModificacion datetime
	,@idEstado int
	,@VisiID uniqueidentifier
)
AS
    SET NOCOUNT ON ;
    BEGIN TRY
declare @idLugartrabajo int

IF NOT EXISTS(SELECT * FROM [AGM].[Anexos] WITH (NOLOCK) WHERE ID = @ID)
BEGIN
	--Asignando el IdVisita
	SELECT @idVisita = idVisita  FROM [AGM].[Visitas] WITH (NOLOCK)  WHERE ID = @VisiID

	IF (@idLTrabajo != NULL)
	BEGIN
	--Asignando el Idltrabajo
		SELECT @idLugartrabajo = idLugarTrabajo  FROM [AGM].[LugaresTrabajo] WITH (NOLOCK)  WHERE ID = @idLTrabajo
	END
	ELSE
	BEGIN
		SET @idLugartrabajo = NULL;
	END
	
	
	INSERT INTO [AGM].[Anexos]
	(
		ID
		,URL
		,CodNivel
		,idVisita
		,idUPM
		,idLugarTrabajo
		,Descripcion
		,Tipo
		,UsuarioCreacion
		,UsuarioModificacion
		,FechaModificacion
		,idEstado
	) 
	VALUES 
	(
		@ID
		,@URL
		,@CodNivel
		,@idVisita
		,@idUPM
		,@idLugartrabajo
		,@Descripcion
		,@Tipo
		,@UsuarioCreacion
		,@UsuarioModificacion
		,@FechaModificacion
		,@idEstado
	)
END
ELSE
BEGIN
	UPDATE [dbo].[Anexos] SET URL = @URL, CodNivel = @CodNivel, Descripcion =@Descripcion, Tipo = @Tipo, FechaModificacion = GETDATE() 
	WHERE ID = @ID


END

END TRY	
BEGIN CATCH
    ROLLBACK TRANSACTION ;
    DECLARE @TextoAdicionalt VARCHAR(250)
    SET @TextoAdicionalt = CONVERT(VARCHAR(100), GETDATE(), 101) + ', ' + CONVERT(VARCHAR(100), ERROR_NUMBER()) + ', ' + ERROR_MESSAGE() + ', ' + CONVERT(VARCHAR(100), ERROR_LINE()) + ', ' + ERROR_PROCEDURE()
		
			
END CATCH