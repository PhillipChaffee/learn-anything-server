import {CategoryController} from "./controller/CategoryController";
import {ResourceController} from "./controller/ResourceController";

export const Routes = [{
    method: "get",
    route: "/categories",
    controller: CategoryController,
    action: "all"
}, {
    method: "get",
    route: "/categories/:id",
    controller: CategoryController,
    action: "one"
}, {
    method: "post",
    route: "/categories",
    controller: CategoryController,
    action: "save"
}, {
    method: "delete",
    route: "/categories/:id",
    controller: CategoryController,
    action: "remove"
}, {
    method: "get",
    route: "/resources",
    controller: ResourceController,
    action: "all"
}, {
    method: "get",
    route: "/resources/:id",
    controller: ResourceController,
    action: "one"
}, {
    method: "post",
    route: "/resources",
    controller: ResourceController,
    action: "save"
}, {
    method: "delete",
    route: "/resources/:id",
    controller: ResourceController,
    action: "remove"
}];