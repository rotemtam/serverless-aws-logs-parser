module.exports = {
  'api-gateway': {
    'two-events': `2016-10-01T10:55:45.602Z Verifying Usage Plan for request: 9ac0eacd-87c5-11e6-b30c-19c3d9849330. API Key: **********************************bMZHBg API Stage: ulhoxnm2x2/dev
2016-10-01T10:55:45.610Z Usage Plan check succeeded for API Key **********************************bMZHBg and API Stage ulhoxnm2x2/dev
2016-10-01T10:55:45.611Z Starting execution for request: 9ac0eacd-87c5-11e6-b30c-19c3d9849330
2016-10-01T10:55:45.611Z HTTP Method: POST, Resource Path: /repos/hello
2016-10-01T10:55:45.611Z API Key: **********************************bMZHBg
2016-10-01T10:55:45.611Z Method request path: {id=hello}
2016-10-01T10:55:45.611Z Method request query string: {q=koa-oop}
2016-10-01T10:55:45.611Z Method request headers: {Origin=chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop, Accept=*/*, CloudFront-Viewer-Country=IL, CloudFront-Forwarded-Proto=https, CloudFront-Is-Tablet-Viewer=false, CloudFront-Is-Mobile-Viewer=false, User-Agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36, X-Forwarded-Proto=https, CloudFront-Is-SmartTV-Viewer=false, Host=ulhoxnm2x2.execute-api.us-east-1.amazonaws.com, Accept-Encoding=gzip, deflate, br, X-Forwarded-Port=443, Via=1.1 e6cb0679fa61da2521709d87ab885435.cloudfront.net (CloudFront), x-api-key=**********************************bMZHBg, X-Amz-Cf-Id=eW0mn16zzRDuAAce9P5l7FDm3s9F5KKLMICOFVzwpDhrUouzstQ8oA==, X-Forwarded-For=199.203.61.109, 54.240.145.13, Postman-Token=07744528-ed3c-7bf2-7706-d312949f5add, Accept-Language=en-US,en;q=0.8,he;q=0.6, CloudFront-Is-Desktop-Viewer=true}
2016-10-01T10:55:45.611Z Method request body before transformations: null
2016-10-01T10:55:45.612Z Endpoint request URI: https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/arn:aws:lambda:us-east-1:<account id>:function:SampleProject_getRepositories/invocations
2016-10-01T10:55:45.612Z Endpoint request headers: {x-amzn-lambda-integration-tag=9ac0eacd-87c5-11e6-b30c-19c3d9849330, Authorization=*******************************************************************************************************************************************************************************************************************************************************************************************************63c459, X-Amz-Date=20161001T105545Z, x-amzn-apigateway-api-id=ulhoxnm2x2, Accept=application/json, User-Agent=AmazonAPIGateway_ulhoxnm2x2, X-Amz-Security-Token=AgoGb3JpZ2luEKf//////////wEaCXVzLWVhc3QtMSKAAlFwLAYI+rpVbOUH5cQ2mfK9JErL2Wo7X/Ngrrv+6aMkzE2DmLaTI7q1McxeiLxrKgMDrbbiIkr3+q7K7RBMj4gGku2s/OIfDS5zku1L0EMQdLWPn9XpL/ouz0MFV49eJFv33w+d1N/nDVI+H+Hja/4IWB/CYjwFs5t9xrYjdj0sq0JJxpfm28wgt1NhJd0D828hBAiEBgRsQR5PLedScETMiN8WDJtpoYF/uICtf54Trjz4xTFf7BP9lNPQjSGBgazKQXTpUzU34fVPncbKds3pSE14FH36Ck5n+b3tb4/h4iXLXlFeRBzuXPhoJmq538osg92wNetStWDar0oALOwqgAIIXBAAGgw2MDc0MDkyMjQ4ODUiDILu+CQPvF5auVzt1yrdAa4UiCw6i0xHFnl2WzH94u6x [TRUNCATED]
2016-10-01T10:55:45.612Z Endpoint request body after transformations: {
   "method": "POST",
   "body" : {},
   "headers": {
          "Accept": "*\/*" ,
          "Accept-Encoding": "gzip, deflate, br" ,
          "Accept-Language": "en-US,en;q=0.8,he;q=0.6" ,
          "CloudFront-Forwarded-Proto": "https" ,
          "CloudFront-Is-Desktop-Viewer": "true" ,
          "CloudFront-Is-Mobile-Viewer": "false" ,
          "CloudFront-Is-SmartTV-Viewer": "false" ,
          "CloudFront-Is-Tablet-Viewer": "false" ,
          "CloudFront-Viewer-Country": "IL" ,
          "Host": "ulhoxnm2x2.execute-api.us-east-1.amazonaws.com" ,
          "Origin": "chrome-extension:\/\/fhbjgbiflinjbdggehcddcbncdddomop" ,
          "Postman-Token": "07744528-ed3c-7bf2-7706-d312949f5add" ,
          "User-Agent": "Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/53.0.2785.116 Safari\/537.36" ,
          "Via": "1.1 e6cb0679fa61da2521709d87ab885435.cloudfront.net (CloudFront)" ,
          "X-Amz- [TRUNCATED]
2016-10-01T10:55:45.697Z Endpoint response body before transformations: {"items":[{"id":52210675,"name":"koa-oop","full_name":"rotemtam/koa-oop","owner":{"login":"rotemtam","id":1522681,"avatar_url":"https://avatars.githubusercontent.com/u/1522681?v=3","gravatar_id":"","url":"https://api.github.com/users/rotemtam","html_url":"https://github.com/rotemtam","followers_url":"https://api.github.com/users/rotemtam/followers","following_url":"https://api.github.com/users/rotemtam/following{/other_user}","gists_url":"https://api.github.com/users/rotemtam/gists{/gist_id}","starred_url":"https://api.github.com/users/rotemtam/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/rotemtam/subscriptions","organizations_url":"https://api.github.com/users/rotemtam/orgs","repos_url":"https://api.github.com/users/rotemtam/repos","events_url":"https://api.github.com/users/rotemtam/events{/privacy}","received_events_url":"https://api.github.com/users/rotemtam/received_events","type":"User","site_admin":false},"private":false,"html_u [TRUNCATED]
2016-10-01T10:55:45.697Z Endpoint response headers: {x-amzn-Remapped-Content-Length=0, x-amzn-RequestId=9ac22388-87c5-11e6-bbc1-33087d94627b, Connection=keep-alive, Content-Length=4567, Date=Sat, 01 Oct 2016 10:55:45 GMT, Content-Type=application/json}
2016-10-01T10:55:45.697Z Method response body after transformations: {"items":[{"id":52210675,"name":"koa-oop","full_name":"rotemtam/koa-oop","owner":{"login":"rotemtam","id":1522681,"avatar_url":"https://avatars.githubusercontent.com/u/1522681?v=3","gravatar_id":"","url":"https://api.github.com/users/rotemtam","html_url":"https://github.com/rotemtam","followers_url":"https://api.github.com/users/rotemtam/followers","following_url":"https://api.github.com/users/rotemtam/following{/other_user}","gists_url":"https://api.github.com/users/rotemtam/gists{/gist_id}","starred_url":"https://api.github.com/users/rotemtam/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/rotemtam/subscriptions","organizations_url":"https://api.github.com/users/rotemtam/orgs","repos_url":"https://api.github.com/users/rotemtam/repos","events_url":"https://api.github.com/users/rotemtam/events{/privacy}","received_events_url":"https://api.github.com/users/rotemtam/received_events","type":"User","site_admin":false},"private":false,"html_url" [TRUNCATED]
2016-10-01T10:55:45.697Z Method response headers: {Content-Type=application/json}
2016-10-01T10:55:45.697Z Successfully completed execution
2016-10-01T10:55:45.697Z Method completed with status: 200
2016-10-01T10:55:36.315Z Verifying Usage Plan for request: 9537d573-87c5-11e6-b3e4-6f23bc206746. API Key: **********************************bMZHBg API Stage: ulhoxnm2x2/dev
2016-10-01T10:55:36.325Z Usage Plan check succeeded for API Key **********************************bMZHBg and API Stage ulhoxnm2x2/dev
2016-10-01T10:55:36.326Z Starting execution for request: 9537d573-87c5-11e6-b3e4-6f23bc206746
2016-10-01T10:55:36.326Z HTTP Method: POST, Resource Path: /repos/hello
2016-10-01T10:55:36.326Z API Key: **********************************bMZHBg
2016-10-01T10:55:36.326Z Method request path: {id=hello}
2016-10-01T10:55:36.326Z Method request query string: {}
2016-10-01T10:55:36.326Z Method request headers: {Origin=chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop, Accept=*/*, CloudFront-Viewer-Country=IL, CloudFront-Forwarded-Proto=https, CloudFront-Is-Tablet-Viewer=false, CloudFront-Is-Mobile-Viewer=false, User-Agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36, X-Forwarded-Proto=https, CloudFront-Is-SmartTV-Viewer=false, Host=ulhoxnm2x2.execute-api.us-east-1.amazonaws.com, Accept-Encoding=gzip, deflate, br, X-Forwarded-Port=443, Via=1.1 e6cb0679fa61da2521709d87ab885435.cloudfront.net (CloudFront), x-api-key=**********************************bMZHBg, X-Amz-Cf-Id=Qr82GnPkKddXmNMLRFpOGpA_EH6ajYrk-AapcXBqAKMqVHPYdzYfaQ==, X-Forwarded-For=199.203.61.109, 54.240.145.57, Postman-Token=7ff039cb-f290-0368-5285-db273d3ac48f, Accept-Language=en-US,en;q=0.8,he;q=0.6, CloudFront-Is-Desktop-Viewer=true}
2016-10-01T10:55:36.326Z Method request body before transformations: null
2016-10-01T10:55:36.327Z Endpoint request URI: https://lambda.us-east-1.amazonaws.com/2015-03-31/functions/arn:aws:lambda:us-east-1:<account id>:function:SampleProject_getRepositories/invocations
2016-10-01T10:55:36.327Z Endpoint request headers: {x-amzn-lambda-integration-tag=9537d573-87c5-11e6-b3e4-6f23bc206746, Authorization=*******************************************************************************************************************************************************************************************************************************************************************************************************e02aab, X-Amz-Date=20161001T105536Z, x-amzn-apigateway-api-id=ulhoxnm2x2, Accept=application/json, User-Agent=AmazonAPIGateway_ulhoxnm2x2, X-Amz-Security-Token=AgoGb3JpZ2luEKf//////////wEaCXVzLWVhc3QtMSKAAkeM6Ff9ixkpyS2Ut1zP2xnQrVaWgwMggXKCfp3bkjFoWm1Qb0tJHsFEu2E6YWcms7s7d/d7fLCMQloRTB9gETgUv47qmdg2wHthYmj3Mx61n3NelG2POq3N+JTcyA1fmr3YTGivlmj8l4xHTNVdqi1t9cT+LekxCGcTnKz1FXbNNyjm2RKq5VitNl4Xj2VWcFMUgBOnopxZxruFVPji9trjL2rxLuX2/b2dP1vrywzqFGUwHXMp8mYjRfHqB2/ssnGlJcrsIKsCYsNqe09iVTcbGsFzmLMysCRmrdisc+MEyM7FAOQ1CftYMBbUVPEm/YT+dMzBHjr4K9jfHOLCqhwqgAIIXBAAGgw2MDc0MDkyMjQ4ODUiDEMzHr1Ir6rewavoQyrdAcxjuWjCHbQBliVp5OKAhwUb [TRUNCATED]
2016-10-01T10:55:36.327Z Endpoint request body after transformations: {
   "method": "POST",
   "body" : {},
   "headers": {
          "Accept": "*\/*" ,
          "Accept-Encoding": "gzip, deflate, br" ,
          "Accept-Language": "en-US,en;q=0.8,he;q=0.6" ,
          "CloudFront-Forwarded-Proto": "https" ,
          "CloudFront-Is-Desktop-Viewer": "true" ,
          "CloudFront-Is-Mobile-Viewer": "false" ,
          "CloudFront-Is-SmartTV-Viewer": "false" ,
          "CloudFront-Is-Tablet-Viewer": "false" ,
          "CloudFront-Viewer-Country": "IL" ,
          "Host": "ulhoxnm2x2.execute-api.us-east-1.amazonaws.com" ,
          "Origin": "chrome-extension:\/\/fhbjgbiflinjbdggehcddcbncdddomop" ,
          "Postman-Token": "7ff039cb-f290-0368-5285-db273d3ac48f" ,
          "User-Agent": "Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/53.0.2785.116 Safari\/537.36" ,
          "Via": "1.1 e6cb0679fa61da2521709d87ab885435.cloudfront.net (CloudFront)" ,
          "X-Amz- [TRUNCATED]
2016-10-01T10:55:36.480Z Endpoint response body before transformations: {"errorMessage":"Error: Request failed with status code 422"}
2016-10-01T10:55:36.480Z Endpoint response headers: {x-amzn-Remapped-Content-Length=0, x-amzn-RequestId=953898c1-87c5-11e6-8bfd-9d908893e99b, Connection=keep-alive, Content-Length=61, X-Amz-Function-Error=Handled, Date=Sat, 01 Oct 2016 10:55:36 GMT, Content-Type=application/json}
2016-10-01T10:55:36.480Z Method response body after transformations: {"errorMessage":"Error: Request failed with status code 422"}
2016-10-01T10:55:36.480Z Method response headers: {Content-Type=application/json}
2016-10-01T10:55:36.480Z Successfully completed execution
2016-10-01T10:55:36.480Z Method completed with status: 400
    `
  }
}
