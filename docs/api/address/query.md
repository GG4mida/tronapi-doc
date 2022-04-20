# 收款地址查询

:::tip
商户可调用该接口，查询已配置的收款地址信息。
:::

## 接口地址

```shell:no-line-numbers
GET https://pro.tronapi.com/api/address/list
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
    "data": [
        {
            "address": "TNM78UYBFdMBoo5rgZvZpr28kxqRtDxMH8",
            "create_time": "2022-04-10 15:43:33",
            "enabled": true,
            "receive_amount": "15.82",
            "receive_latest": "2022-04-11 15:43:33"
        }
    ],
    "success": true
}
```