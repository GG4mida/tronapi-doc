# 收款地址生成 & 替换

:::tip
商户可调用该接口，生成一个全新未使用的波场钱包地址。同时该操作会使用新生成的地址，替换当前已启用的收款地址。
:::

:::danger
该接口返回的数据是一次性的，请务必妥善保管相关信息，否则可能会造成不必要的资金损失。
:::

## 接口地址

```shell:no-line-numbers
POST https://pro.tronapi.com/api/address/generate_add
```

## 接口参数

参数名 | 含义 | 验证 | 类型 | 说明
:-|:-|:-|:-|:-
public_key | public key | 必填 | string(32) | 商户 public key。
signature | 签名串 | 必填 | string(32) | 安全校验签名串。

:::tip
`signature` 的生成规则为：`toLowerCase(md5(public key + private key))`。
:::

## 返回示例

```json:no-line-numbers
{
    "code": 200,
    "data": {
        "address": {
            "base58": "TWsqYHJt97XcQ1m2FBgjSTmVkCy5vZWMNi",
            "hex": "41E556A5771684C967C66AE3CAA047A017A90E3775"
        },
        "privateKey": "0189BBADCA8B8BBB8B97F920BA3472C4A0F4A56371E6CAFCC82F32DDF210AB24",
        "publicKey": "04B1384AE0887DEAAE3C35E4A36E489A81E7A93547A041CBD306E3FD935A2757EA394E65051E60F6FB625C3D9BCC7B57544BFDE6BB5F49E5DB6ED665E9AC98F6B3"
    },
    "success": true
}
```