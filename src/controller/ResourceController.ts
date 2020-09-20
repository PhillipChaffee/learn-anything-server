import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Resource} from "../entity/Resource";
import {Category} from "../entity/Category";

export class ResourceController {

    private resourceRepository = getRepository(Resource);
    private categoryRepository = getRepository(Category);

    async all(request: Request, response: Response, next: NextFunction) {
        if (request.query.categoryId) {
            return this.resourceRepository.createQueryBuilder("resource").innerJoin("resource.categories", "category").where("category.id = :categoryId").setParameter("categoryId", request.query.categoryId).getMany();
        }

        return this.resourceRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.resourceRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        let categories = await this.categoryRepository.findByIds(request.body.categoryIds);

        let resourceToSave = request.body as Resource;
        resourceToSave.categories = categories;

        return this.resourceRepository.save(resourceToSave);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let resourceToRemove = await this.resourceRepository.findOne(request.params.id);
        await this.resourceRepository.remove(resourceToRemove);

        response.status(202);
        response.send();
    }

}