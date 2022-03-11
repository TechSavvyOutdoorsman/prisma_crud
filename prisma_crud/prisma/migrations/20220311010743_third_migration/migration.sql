/*
  Warnings:

  - The primary key for the `Movie` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Movie` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "slug" TEXT NOT NULL
);
INSERT INTO "new_Movie" ("description", "id", "slug", "title", "year") SELECT "description", "id", "slug", "title", "year" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
