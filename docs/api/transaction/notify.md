# 订单通知

:::tip
用户支付完成后，系统会自动向订单关联的回调地址（`notify_url`）发送通知消息，告知该笔订单已支付完成。
:::

## 通知地址
```shell:no-line-numbers
POST notify_url（商户在订单创建接口中指定）
```

## 通知参数
参数名 | 含义 | 类型 | 说明
:-|:-|:-|:-
transaction_token | 官方订单号 | string(32) | 商户可使用该字段，调用 `订单查询` 接口，核实用户是否支付成功。
order_id | 商讨自定义订单号 | string(64) | 商户自定义订单号，原样返回。
amount | 订单金额 | string(16) | 商户发起接口请求时指定的 `订单金额`。
currency | 订单货币单位 | string(8) | 商户发起接口请求时指定的 `订单币种`，固定为 `USDT`。
coin_code | 订单支付币种 | string(16) | 商户发起接口请求时指定的 `支付币种`
coin_amount | 订单支付金额 | string(16) | 订单显示的支付金额，由 `订单金额` + `订单币种` + `支付币种` 按照实时行情转换而来。
hash | 交易 hash | string(128) | 区块链交易 hash。商户可打开区块链浏览器查询交易详情。
signature | 签名串 | string(32) | 安全校验签名串。

:::tip
`signature` 的生成规则为：`toLowerCase(md5(transaction_token + order_id + amount + currency + coin_code + coin_amount + hash + private key))`。
::: 

## 通知示例

```json:no-line-numbers
{
    "transaction_token": "40b2ac118c8e4f0aab5219ceac0e3da8",
    "order_id": "ZGbqEadw1puEgDeU",
    "amount": "200.00",
    "currency": "CNY",
    "coin_code": "USDT",
    "coin_amount": "31.42",
    "hash": "71f36f7c3eb073a24d0d3e49af6990928a2ae04764c06c07d414acd3f743ae9c",
    "signature": "526517f4603f25ab9ab686c1730f17b5"
}
```
    
## 通知返回

商户在收到通知信息后，可返回以下内容，告知已收到回调通知：

```json:no-line-numbers
{
    "code": 200,
    "data": "ok"
}
```

## 通知重试

系统向商户创建订单时指定的 `notify_url` 发送 `回调通知` 后，如该 `notify_url` 返回的 `http` 状态码不为 `200`，则系统会自动触发 `重试机制`。相关规则如下：

1. 间隔 `30秒` 会进行第1次重试。
2. 如第一次重试仍为失败，则间隔 `10分钟` 会进行第2次重试。

:::tip
商户也可在后台 `订单详情` 页面，动手触发 `回调通知`。
:::