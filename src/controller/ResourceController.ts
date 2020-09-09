import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Resource} from "../entity/Resource";

export class ResourceController {

    private resourceRepository = getRepository(Resource);

    async all(request: Request, response: Response, next: NextFunction) {
        if (request.query.categoryId) {
            return this.resourceRepository.
                createQueryBuilder("resource").
                innerJoin("resource.category", "category").
                where("category.id = :categoryId").
                setParameter("categoryId", request.query.categoryId).
                getMany();
        }

        return this.resourceRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.resourceRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.resourceRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let resourceToRemove = await this.resourceRepository.findOne(request.params.id);
        await this.resourceRepository.remove(resourceToRemove);

        response.status(202);
        response.send();
    }

}