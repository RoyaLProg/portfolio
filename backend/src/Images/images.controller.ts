import { Controller, Get, UseInterceptors, Post, UploadedFiles, ParseFilePipe, FileTypeValidator } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('images')
export class ImagesControllers {

	@Post('upload')
	@UseInterceptors(FileInterceptor('images'))
	upload(
		@UploadedFiles(
			new ParseFilePipe({
				validators: [
					new FileTypeValidator({fileType: "image/*"})
				]
			})
		) files: Array<Express.Multer.File>
	) {
		console.log(files);
	}

	@Get('file')
	serve() {}
}
