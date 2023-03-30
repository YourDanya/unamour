import {number} from 'prop-types'

export const itemButtonsContent = {
    common: {
        actions: {
            createItem: {
                url: 'shop-item',
                options: {
                    method: 'POST'
                }
            },
            updateItem: {
                url: (id: string) => `shop-item/${id}`,
                options: {
                    method: 'PUT'
                }
            },
            deleteItem: {
                url: (id: string) => `shop-item/${id}`,
                options: {
                    method: 'DELETE'
                }
            },
            createImages: {
                url: 'shop-item/add-images`',
                options: {
                    method: 'POST',
                    headers: {'Content-Type': 'multipart/form-data'}
                }
            },
            updateImages: {
                url: 'edit-files-by-ids',
                options: {
                    method: 'POST',
                    headers: {'Content-Type': 'multipart/form-data'}
                }
            },
            deleteImages: {
                url: 'shop-item/remove-images',
                options: {
                    method: 'POST'
                }
            }
        }
    },
    translations: {
        ua: {
            save: 'зберегти товар',
            delete: 'видалити товар',
            errors: {
                updateItem: 'Невірні дані. Не вдалося оновити товар.',
                createItem: 'Невірні дані. Не вдалося створити товар.',
                deleteItem: 'Невірні дані. Не вдалося видалити товар.',
                updateImages: 'Не вдалося оновити картинки.',
                createImages: 'Не вдалося створити картинки.',
                deleteImages: 'Не вдалося видалити картинки.'
            },
            success: {
                createItem: 'Товар успішно створено.\nПовідомлення буде видалено через',
                updateItem: 'Товар успішно оновлено.\nПовідомлення буде видалено через',
                deleteItem: 'Товар успішно видалено.\nПовідомлення буде видалено через',
                createImages: 'Картинки успішно створено.\nПовідомлення буде видалено через',
                updateImages: 'Картинки успішно оновлено.\nПовідомлення буде видалено через',
                deleteImages: 'Картинки успішно видалено.\nПовідомлення буде видалено через',
            },
            clientError: (count: number) => `Не можна зберегти. Кількість помилок: ${count}.`
        },
        eng: {
            save: 'save item',
            delete: 'delete item',
            errors: {
                updateItem: 'Wrong data. Item was not updated.',
                createItem: 'Wrong data. Item was not created.',
                deleteItem: 'Wrong data. Item was not  deleted.',
                updateImages: 'Images were not updated.',
                createImages: 'Images were not created.',
                deleteImages: 'Images were not deleted.'
            },
            success: {
                createItem: 'Item was successfully created.\nMessage will be cleared in',
                updateItem: 'Item was successfully updated.\nMessage will be cleared in',
                deleteItem: 'Item was successfully deleted.\nMessage will be cleared in',
                createImages: 'Images were successfully created.\nMessage will be cleared in',
                updateImages: 'Images were successfully updated.\nMessage will be cleared in',
                deleteImages: 'Images were successfully deleted.\nMessage will be cleared in',
            },
            clientError: (count: number) => `Can't save. Number of errors: ${count}.`
        },
        ru: {
            save: 'сохранить товар',
            delete: 'удалить товар',
            errors: {
                updateItem: 'Неверные данные. Товар не бьл обнолвен.',
                createItem: 'Неверные данные. Товар не бьл содан.',
                deleteItem: 'Неверные данные. Товар не бьл удален.',
                updateImages: 'Не удалось обновить картинки.',
                createImages: 'Не удалось создать картинки.',
                deleteImages: 'Не удалось удалить картинки.'
            },
            success: {
                createItem: 'Товар успешно создан.\nУведомление будет удалено через',
                updateItem: 'Товар успешно обналвен.\nУведомление будет удалено через',
                deleteItem: 'Товар успешно удален.\nУведомление будет удалено через',
                createImages: 'Картинки успішно створено.\nПовідомлення буде видалено через',
                updateImages: 'Картинки успешно удалены.\nУведомление будет удалено через',
                deleteImages: 'Картинки успешно удалены.\nУведомление будет удалено через'
            },
            clientError: (count: number) => `Нельзя сохранить. Количество ошибок: ${count}.`
        }
    }
}