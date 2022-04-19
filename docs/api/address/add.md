# 收款地址配置

:::tip
商户可调用该接口，指定当前订单收款地址。
:::

## 接口地址

```shell:no-line-numbers
POST https://pro.tronapi.com/api/address/add
```

## 接口参数

参数名 | 含义 | 验证 | 类型 | 说明
:-|:-|:-|:-|:-
public_key | public key | 必填 | string(32) | 商户 public key。
address | 收款地址 | 必填 | string(34) | 订单收款地址
signature | 签名串 | 必填 | string(32) | 安全校验签名串。

:::tip
`signature` 的生成规则为：`toLowerCase(md5(public key + address + private key))`。
:::

## 返回示例

```json:no-line-numbers
{
    "code": 200,
    "data": true,
    "success": true
}
```

:::tip
当 `data` 字段值为 `true` 时，代表操作成功，否则代表操作失败。
:::