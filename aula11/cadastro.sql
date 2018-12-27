create table usuarios(
    nome varchar(50),
    email varchar(100),
    idade int(2)
);
insert into usuarios (nome, email, idade) values('carol', 'carol@carol.com', 35);
insert into usuarios (nome, email, idade) values('jao', 'jao@jao.com', 36);
insert into usuarios (nome, email, idade) values('ze', 'ze@ze.com', 37);
insert into usuarios (nome, email, idade) values('maria', 'maria@maria.com',38);

delete * from usuario where nome = carol;