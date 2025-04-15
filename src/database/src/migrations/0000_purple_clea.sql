CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`usu_email` text NOT NULL,
	`usu_emp` integer NOT NULL,
	`usu_ativo` integer DEFAULT 0,
	`usu_set` integer NOT NULL,
	`usu_img` text DEFAULT '',
	`usu_gp` integer NOT NULL,
	`set_nivel` integer DEFAULT 3,
	`set_desc` text NOT NULL,
	`gp_desc` text NOT NULL
);
