CREATE TABLE `rooms` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`encoded_storage` text
);

CREATE UNIQUE INDEX `name_idx` ON `rooms` (`name`);