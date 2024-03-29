-- CreateTable
CREATE TABLE `_BorrowedBooks` (
    `A` VARCHAR(100) NOT NULL,
    `B` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `_BorrowedBooks_AB_unique`(`A`, `B`),
    INDEX `_BorrowedBooks_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_BorrowedBooks` ADD CONSTRAINT `_BorrowedBooks_A_fkey` FOREIGN KEY (`A`) REFERENCES `books`(`code`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_BorrowedBooks` ADD CONSTRAINT `_BorrowedBooks_B_fkey` FOREIGN KEY (`B`) REFERENCES `members`(`code`) ON DELETE CASCADE ON UPDATE CASCADE;
