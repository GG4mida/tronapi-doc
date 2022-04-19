# 订单官方收银台

商户调用 `订单创建`（/api/transaction/create） 接口后，会返回如下格式数据：
```json:no-line-numbers
{
  "code": 200,
  "data": {
      "token": "55427eb1f9ef4608a8106e291fcecb71",
      "amount": "200.00",
      "currency": "CNY",
      "coin_code": "USDT",
      "coin_amount": "31.42",
      "coin_address": "TCtLGN795ojMXfXFizLuGGtJyAxFzvAPH8",
      "qrcode_url": "https://pro.tronapi.com/api/transaction/qrcode?token=55427eb1f9ef4608a8106e291fcecb71",
      "cashier_url": "https://pro.tronapi.com/api/transaction/cashier?token=55427eb1f9ef4608a8106e291fcecb71",
      "signature": "d415fbd6726c39d0e0147e28aa2b2e76",
      "timeout": 1800,
  },
  "success": true
}
```
    
商户可直接从上述返回数据中，取出 `cashier_url` 字段，然后跳转至该地址供用户支付。

## 收银台
跳转至 `cashier_url` 后，页面显示如下：

<img src="/images/cashier.png" alt="" width="360"/>

## 跳转

用户在收银台支付成功后，系统会自动通知商户在创建订单时指定的回调地址（`notify_url`）。在间隔大概 `1` 秒钟后，页面会自动跳转至商户在创建订单时指定的跳转地址（`redirect_url`）。

:::tip
若商户在创建订单时未指定 `notify_url`，则系统会使用商户在后台统一配置的 `订单回调地址`。
:::

### 跳转地址
```shell:no-line-numbers
GET redirect_url（商户在订单创建接口中指定）
```

### 跳转参数

参数名 | 含义 | 类型 | 说明
:-|:-|:-|:-
order_id | 商户自定义订单号 |	string(32) | 商户可以通过 `order_id` 参数，查询本地数据库，确认用户是否支付成功，并给出相应的页面展示。

::: warning
请不要将此跳转作为用户支付成功的判断条件，此行为极不安全。请根据支付成功的回调通知是否送达，来判断用户是否支付成功。
:::