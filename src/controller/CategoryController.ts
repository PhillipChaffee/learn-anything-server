import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Category} from "../entity/Category";

export class CategoryController {

    private categoryRepository = getRepository(Category);

    async all(request: Request, response: Response, next: NextFunction) {
        let categories = await this.categoryRepository.find({relations: ['resources']});

        for(let category of categories){
            category['resourceCount'] = category.resources.length;
            delete category.resources;
        }

        return categories;
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.categoryRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let newCategory = request.body;
        if (!newCategory.name) {
            response.status(400);
            response.send("New categories must have a name.")
        }

        return this.categoryRepository.save(newCategory);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let categoryToRemove = await this.categoryRepository.findOne(request.params.id);

        if (categoryToRemove.resources && categoryToRemove.resources.length > 0) {
            response.status(409);
            response.send("Cannot delete a category that still has resources.");
        }

        await this.categoryRepository.remove(categoryToRemove);

        response.status(202);
        response.send();
    }

}