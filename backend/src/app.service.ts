import { Injectable } from '@nestjs/common';

import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import * as moment from 'moment';
const api = new WooCommerceRestApi({
  url: 'https://vivavillamexicangrill.com',
  consumerKey: 'ck_a51edca55b2f0eb2137f0ef7f008e7b1e2bc6c43',
  consumerSecret: 'cs_ddb1ea545bae5ac9c875e5a201c320f8ecaacabb',
  version: 'wc/v3',
});
@Injectable()
export class AppService {
  getHello(): string {
    return 'HomePage';
  }
  async getOrders() {
    let products = [];

    await api
      .get('orders', {
        per_page: 50, // 20 products per page
      })
      .then((response) => {
        products = response.data;
      });
    const today = moment().startOf('day');
    const yesterday = moment().subtract(1, 'days');
    const todayProducts = products.filter((order) =>
      moment(order.date_created).isSame(today, 'day'),
    );
    const yesterdayProducts = products.filter((order) =>
      moment(order.date_created).isSame(yesterday, 'day'),
    );
    return {
      todayProducts: todayProducts,
      yesterdayProducts: yesterdayProducts,
    };
  }
}
