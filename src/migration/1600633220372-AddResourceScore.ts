import {MigrationInterface, QueryRunner} from "typeorm";

export class AddResourceScore1600633220372 implements MigrationInterface {
    name = 'AddResourceScore1600633220372'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "resource" ADD "score" integer DEFAULT 0 NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "resource" DROP COLUMN "score"`);
    }

}
