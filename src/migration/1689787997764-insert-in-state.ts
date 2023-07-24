import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertIntState1689787997764 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            INSERT INTO state ("id" , "name" , "uf") VALUES (1, 'Acre', 'AC');
            INSERT INTO state ("id" , "name" , "uf") VALUES (2, 'Alagoas' , 'AL');
            INSERT INTO state ("id" , "name" , "uf") VALUES (3, 'Amazonas' , 'AM');
            INSERT INTO state ("id" , "name" , "uf") VALUES (4, 'Amapá' , 'AP');
            INSERT INTO state ("id" , "name" , "uf") VALUES (5, 'Bahia' , 'BA');
            INSERT INTO state ("id" , "name" , "uf") VALUES (6, 'Ceará' , 'CE');
            INSERT INTO state ("id" , "name" , "uf") VALUES (7, 'Distrito Federal' , 'DF');
            INSERT INTO state ("id" , "name" , "uf") VALUES (8, 'Espírito Santo' , 'ES');
            INSERT INTO state ("id" , "name" , "uf") VALUES (9, 'Maranhão' , 'MA');
            INSERT INTO state ("id" , "name" , "uf") VALUES (10, 'Minas Gerais' , 'MG');
            INSERT INTO state ("id" , "name" , "uf") VALUES (11, 'Mato Grosso do Sul' , 'MS');
            INSERT INTO state ("id" , "name" , "uf") VALUES (12, 'Mato Grosso' , 'MT');
            INSERT INTO state ("id" , "name" , "uf") VALUES (13, 'Pará' , 'PA');
            INSERT INTO state ("id" , "name" , "uf") VALUES (14, 'Paraíba' , 'PB');
            INSERT INTO state ("id" , "name" , "uf") VALUES (15, 'Pernambuco' , 'PE');
            INSERT INTO state ("id" , "name" , "uf") VALUES (16, 'Piauí', 'PI');
            INSERT INTO state ("id" , "name" , "uf") VALUES (17, 'Paraná' , 'AP');
            INSERT INTO state ("id" , "name" , "uf") VALUES (18, 'Rio de Janeiro' , 'RJ');
            INSERT INTO state ("id" , "name" , "uf") VALUES (19, 'Rio Grande do Norte' , 'RN');
            INSERT INTO state ("id" , "name" , "uf") VALUES (20, 'Rondônia' , 'RO');
            INSERT INTO state ("id" , "name" , "uf") VALUES (21, 'Roraima' , 'RR');
            INSERT INTO state ("id" , "name" , "uf") VALUES (22, 'Rio Grande do Sul' , 'RS');
            INSERT INTO state ("id" , "name" , "uf") VALUES (23, 'Santa Catarina' , 'SC');
            INSERT INTO state ("id" , "name" , "uf") VALUES (24, 'Sergipe' , 'SE');
            INSERT INTO state ("id" , "name" , "uf") VALUES (25, 'São Paulo' , 'SP');
            INSERT INTO state ("id" , "name" , "uf") VALUES (26, 'Tocantins' , 'TO');
            INSERT INTO state ("id" , "name" , "uf") VALUES (27, 'Goiás' , 'GO');
    
        
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DELETE FROM public.state;
        `)
    }

}
