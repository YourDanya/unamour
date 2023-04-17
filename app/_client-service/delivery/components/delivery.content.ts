const deliveryContent = {
    translations: {
        ua: {
            title1: 'ОПЛАТА І ДОСТАВКА',
            subtitle1: 'УМОВИ ТА СПОСОБИ ДОСТАВКИ',
            text1: 'Доставка замовлення здійснюється після 100% оплати замовлення на сайті, або наложеним платежем за передоплатою 100 грн. Термін формування замовлення 1-3 робочі дні після оплати. Після передачі посилки до транспортної компанії, лист з номером ТТН приходить на адресу електронної пошти, яка була вказана у відправленому трек-номері для надсилання посилки. У разі відмови від отримання замовлення вартість доставки не повертається.',
            text2: 'Термін доставки починає обчислюватися з першого робочого дня після отримання листа з трек-номером. Субота, неділя та святкові дні не включають доставку. Враховуються випадки, пов\'язані з місцевими святами.',
            subtitle2: 'ТРАНСПОРТНА КОМПАНІЯ «НОВА ПОШТА»',
            text3: 'Доставка здійснюється у відділення та поштомати або кур’єром «Нова пошта» по всій Україні, крім тимчасово окупованих територій. Після того, як менеджер відправить Ваше замовлення, Ви отримаєте текстове повідомлення з номером експрес накладної. За цим номером Ви зможете в будь-який момент відстежити Ваше замовлення і дізнатися, коли воно буде в відділенні на офіційному сайті компанії «Нова пошта». В обов\'язковому порядку перевірте цілісність посилки та її відповідність замовленню у відділенні, перш ніж оплачувати.',
            subtitle3: 'МІЖНАРОДНА ДОСТАВКА',
            text4: 'Вартість, терміни і конкретна служба доставки обговорюються в індивідуальному порядку з менеджером інтернет магазину. При замовленні до Польщі на суму від 4000 гривень, робимо доставку в подарунок. При замовленні до Польщі на суму до 2000 гривень, вартість доставки 150-250 гривень. При замовлені в інші країни - тарифікація доставки згідно вартості на Укрпошті чи Новою Поштою, яка зараз пропонує максимально вигідні ціни. Строк доставки - в середньому півтора тижні.',
            subtitle4: 'СПОСОБИ ОПЛАТИ',
            label1: 'Готівка',
            list1: [
                'Оплата готівкою при отриманні товару (адресна доставка кур\'єром Нової пошти).',
                'Даний варіант оплати розповсюджується виключно на доставку по території України.'
            ],
            label2: 'Visa і MasterCard',
            list2: [
                'Оплата замовлення онлайн банківською картою Visa і MasterCard через систему WayForPay.',
                {
                    text: 'Зверніть увагу,',
                    type: 'inner'
                },
                ' що при цьому способі оплати доставка товару можлива тільки після підтвердження платежу.'
            ],
            label3: 'Накладений платіж ТК «Нова пошта»',
            list3: [
                'Відправка наложеним платежем здійснюється після передплати у розмірі 100 грн. Оплата замовлення післяплатою здійснюється після огляду посилки на відповідність замовленню в відділенні компанії «Нова пошта».',
                'Стягується комісія "Нової Пошти" 2% від суми замовлення, плюс 20 грн за переказ грошових коштів.',
                'Якщо ж з якихось причин замовлення Вам не підійшло, Ви просто відмовляєтеся від отримання посилки і не оплачуєте нічого.'
            ],
            label4: 'Інші варіанти оплати',
            list4: [
                'Оплата через термінал або касу "ПриватБанк", додаток Приват24, IBox або інші термінали. Реквізити для оплати Вам надасть менеджер після підтвердження замовлення.',
                {
                    text: 'Зверніть увагу! ',
                    type: 'inner'
                },
                'Для мешканців інших країн оплата замовлення здійснюється за допомогою грошового переказу (в національній валюті по комерційному курсу на день оплати). Замовлення відправляється після 100% передоплати (вартість товару + доставка).'
            ]
        },
        eng: {
            title1: 'PAYMENT AND DELIVERY',
            subtitle1: 'TERMS AND METHODS OF DELIVERY',
            text1: 'The delivery of the order is carried out after 100% payment of the order on the website, or by cash on delivery with a prepayment of UAH 100. The term of order formation is 1-3 working days after payment. After the parcel is transferred to the transport company, a letter with the TTN number arrives at the e-mail address that was specified in the sent track number for sending the parcel. In case of refusal to receive the order, the delivery cost will not be refunded.',
            text2: 'The delivery period begins to be calculated from the first working day after receiving the letter with the track number. Saturday, Sunday and holidays do not include delivery. Cases related to local holidays are taken into account.',
            subtitle2: 'TRANSPORT COMPANY "NOVA POSHTA"',
            text3: 'Delivery is carried out to branches and post offices or by the "Nova Poshta" courier throughout Ukraine, except temporarily occupied territories. After the manager ships your order, you will receive a text message with the express invoice number. Using this number, you can track your order at any time and find out when it will be in the branch on the official website of the "Nova Poshta" company. Be sure to check the integrity of the parcel and its compliance with the order in the branch before paying.',
            subtitle3: 'INTERNATIONAL DELIVERY',
            text4: 'The cost, terms and specific delivery service are discussed individually with the manager of the online store. When ordering to Poland in the amount of UAH 4,000 or more, we make delivery as a gift. When ordering to Poland in the amount of up to 2000 hryvnias, the cost of delivery is 150-250 hryvnias. When ordering to other countries, delivery pricing is based on the cost of Ukrposhta or Novaya Poshta, which currently offers the most favorable prices. The delivery time is one and a half weeks on average.',
            subtitle4: 'WAYS OF PAYMENT',
            label1: 'Cash',
            list1: [
                'Payment in cash upon receipt of the goods (address delivery by Nova Poshta courier).',
                'This payment option applies exclusively to delivery within the territory of Ukraine.'
            ],
            label2: 'Visa and MasterCard',
            list2: [
                'Payment of the order online with a Visa and MasterCard bank card through the WayForPay system.',
                {
                    text: 'Please note,',
                    type: 'inner'
                },
                'that with this method of payment, delivery of the goods is possible only after confirmation of payment.'
            ],
            label3: 'Cash on delivery of TC "Nova Poshta"',
            list3: [
                'Delivery by cash on delivery is carried out after a prepayment of UAH 100. The payment of the order by cash on delivery is made after the inspection of the parcel for compliance with the order at the branch of the company "Nova Poshta".',
                'Nova Poshta commission of 2% of the order amount is charged, plus UAH 20 for money transfer.',
                'If for some reason the order did not suit you, you simply refuse to receive the package and do not pay anything.'
            ],
            label4: 'Other payment options',
            list4: [
                'Payment through the PrivatBank terminal or cash register, the Privat24 application, IBox or other terminals. Payment details will be provided to you by the manager after confirmation of the order.',
                {
                    text: 'Pay attention! ',
                    type: 'inner'
                },
                ' For residents of other countries, payment for the order is made by money transfer (in the national currency at the commercial rate on the day of payment). The order is sent after 100% prepayment (cost of goods + delivery).'
            ]
        },
        ru: {
            title1: 'ОПЛАТА И ДОСТАВКА',
            subtitle1: 'УСЛОВИЯ И СПОСОБЫ ДОСТАВКИ',
            text1: 'Доставка заказа осуществляется после 100% оплаты заказа на сайте или наложенным платежом по предоплате 100 грн. Срок формирования заказа 1-3 рабочих дня после оплаты. После передачи посылки в транспортную компанию, письмо с номером ТТН приходит на адрес электронной почты, указанный в отправленном трек-номере для отправки посылки. В случае отказа от получения заказа стоимость доставки не возвращается.',
            text2: 'Срок доставки начинает исчисляться с первого рабочего дня после получения письма с трек-номером. Суббота, воскресенье и праздничные дни не включают в себя доставку. Учитываются случаи, связанные с местными праздниками.',
            subtitle2: 'ТРАНСПОРТНАЯ КОМПАНИЯ «НОВАЯ ПОЧТА»',
            text3: 'Доставка осуществляется в отделение и почтоматы или курьером «Новая почта» по всей Украине, кроме временно оккупированных территорий. После того, как менеджер отправит ваш заказ, вы получите текстовое сообщение с номером экспресс накладной. По этому номеру Вы сможете в любой момент отследить ваш заказ и узнать, когда он будет в отделении на официальном сайте компании «Новая почта». В обязательном порядке проверьте целостность посылки и ее соответствие заказу в отделении, прежде чем оплачивать.',
            subtitle3: 'МЕЖДУНАРОДНАЯ ДОСТАВКА',
            text4: 'Стоимость, сроки и конкретная служба доставки обсуждаются в индивидуальном порядке с менеджером интернет магазина. При заказе в Польшу на сумму от 4000 гривен, производим доставку в подарок. При заказе в Польшу на сумму до 2000 грн., стоимость доставки 150-250 грн. При заказе в другие страны – тарификация доставки согласно стоимости на Укрпочте или Новой Почте, которая сейчас предлагает максимально выгодные цены. Срок доставки - в среднем полторы недели.',
            subtitle4: 'СПОСОБЫ ОПЛАТЫ',
            label1: 'Наличные',
            list1: [
                'Оплата наличными при получении товара (адресная доставка курьером Новой почты).',
                'Данный вариант оплаты распространяется исключительно на доставку по территории Украины.'
            ],
            label2: 'Visa и MasterCard',
            list2: [
                'Оплата заказа онлайн банковской картой Visa и MasterCard через систему WayForPay.',
                {
                    text: 'Обратите внимание,',
                    type: 'inner'
                },
                ' что при этом способе оплаты доставка товара возможна только после подтверждения платежа.'
            ],
            label3: 'Наложенный платеж ТК «Новая почта»',
            list3: [
                'Отправка наложенным платежом осуществляется после подписки в размере 100 грн. Оплата заказа наложенным платежом осуществляется после осмотра посылки на соответствие заказу в отделении компании «Новая почта».',
                'Взимается комиссия "Новой Почты" 2% от суммы заказа, плюс 20 грн за перевод денежных средств.',
                'Если же по каким-либо причинам заказа Вам не подошло, Вы просто отказываетесь от получения посылки и не оплачиваете ничего.'
            ],
            label4: 'Другие варианты оплаты',
            list4: [
                'Оплата через терминал или кассу "ПриватБанк", приложение Приват24, IBox или другие терминалы. Реквизиты для оплаты Вам предоставит менеджер после подтверждения заказа.',
                {
                    text: 'Обратите внимание! ',
                    type: 'inner'
                },
                'Для жителей других стран оплата заказа осуществляется посредством денежного перевода (в национальной валюте по коммерческому курсу на день оплаты). Заказ отправляется после 100% предоплаты (стоимость товара + доставка).'
            ]
        }
    }
}

export default deliveryContent