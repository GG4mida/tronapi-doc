# 订单创建

:::tip
用于生成指定数字货币的支付数据，包括收款金额、收款地址、收款地址二维码等。商户可选择直接跳转至 `官方的收银台` 供用户支付，也可以使用数据 `自定义收银台`。在用户支付成功后，系统将即时进行 `回调通知`。
:::

## 接口地址

```shell:no-line-numbers
POST https://pro.tronapi.com/api/transaction/create
```

## 接口参数

参数名 | 含义 | 验证 | 类型 | 说明
:-|:-|:-|:-|:-
public_key | public key	| 必填 | string(32)	| 商户 public key。
amount | 订单金额 | 必填 | string(16) | 精确到小数点后2位。
currency | 订单币种 | 必填 | string(8) | 订单币种单位。支持：`CNY`、`USD`。
coin_code | 支付币种 | 必填 | string(16) | 订单支付币种。固定为 `USDT`。
notify_url | 完成后回调通知地址 | 选填 | string(256) | 1. 用户支付完成后，系统会发送一个 `post` 消息到这个地址。<br/>2. 该参数不需要 `urlencode`。例如：http://www.xxx.com/pay_notify。<br/> 3. 商户也可统一在后台对该参数进行配置。
redirect_url | 完成后同步跳转地址 | 选填 | string(256) | 1. 用户支付完成后，系统会自动跳转到这个地址。<br/>2. 该参数不要 `urlencode`。例如：https://www.xxx.com/pay_return。
order_id | 商户端订单号 | 必填 | string(64) | 系统在通知商户接口时，会带上这个参数。例：201710192541。
customer_id | 商户端用户编号 | 选填 | string(64) | 可以为用户名，也可以为数据库中的用户编号。例：xxx@aaa.com，xxx等。
product_name | 商户端产品名称 | 选填 | string(64) | 该参数会显示在官方收银台页面顶部，留空则显示默认值。
signature | 签名串 | 必填 | string(32) | 安全校验签名串。

:::tip
`signature` 的生成规则为：`toLowerCase(md5(amount + currency + coin_code + order_id + product_name + customer_id + notify_url + redirect_url + public key + private key))`。
:::

## 接口返回
参数名 | 含义 | 类型 | 说明
:-|:-|:-|:-
token | 官方订单号 | string(32) | 商户可使用该字段，调用 `订单查询` 接口，核实用户是否支付完成。
amount | 订单金额 | string(16) | 订单金额，原数据返回
currency | 订单币种 | string(8) | 订单币种，原数据返回
coin_code | 订单支付币种 | string(16) | 支付币种，原数据返回
coin_amount | 订单支付金额 | string(16) | 支付金额，由 `订单金额` + `订单币种` + `支付币种` 按照实时行情转换而来。
coin_address | 订单收款地址 | string(64) | 接收用户支付的地址，以字母 `T` 开头。
cashier_url | 官方收银台地址 | string(256) | 官方收银台 `url` 地址，商户可直接跳转到该地址供用户支付。
qrcode_url | 收款码地址 | string(256) | 币种对应的收款码地址。多用于 `商户自定义收银台`。
timeout | 订单过期时间 | int | 订单过期时间，单位 `秒`
signature | 签名串 | string(32) | 安全校验签名串。

:::tip
`signature` 的生成规则为：`toLowerCase(md5(token + amount + currency + coin_code + coin_amount + address + timeout + cashier_url + qrcode_url + private key))`。
:::

:::tip
订单支付金额（`coin_amount`），由 `订单金额` + `订单币种` + `支付币种` 按照实时行情转换而来。
:::

### 返回示例
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

    
    