import {MigrationInterface, QueryRunner} from "typeorm";

export class CriarTabelas1614789211389 implements MigrationInterface {
    name = 'CriarTabelas1614789211389'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `produto` (`id` int NOT NULL AUTO_INCREMENT, `nome` varchar(255) NOT NULL, `quantidade` int NOT NULL, `preco` decimal(5,2) NOT NULL DEFAULT '0.00', `status` tinyint NOT NULL DEFAULT true, `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` timestamp NULL, `categoriaId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `categoria` (`id` int NOT NULL AUTO_INCREMENT, `nome` varchar(255) NOT NULL, `status` tinyint NOT NULL DEFAULT true, `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` timestamp NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `produto` ADD CONSTRAINT `FK_8a1e81267ae184590ce1ee9a39b` FOREIGN KEY (`categoriaId`) REFERENCES `categoria`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `produto` DROP FOREIGN KEY `FK_8a1e81267ae184590ce1ee9a39b`");
        await queryRunner.query("DROP TABLE `categoria`");
        await queryRunner.query("DROP TABLE `produto`");
    }

}
