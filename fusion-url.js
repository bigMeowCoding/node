function createCMsWebViewUrl(url) {
  return `/cms_webview/index?url=${encodeURIComponent(url)}`;
}

function createLegoIndexFusionUrl(templateKey) {
  const url =
    `https://{FUSION_DOMAIN}/bos/lego/{CID}/{VID}/{PRODUCT_INSTANCE_ID}/${templateKey}?activityId={activityId}` +
    "&authMode=2";
  return createCMsWebViewUrl(url);
}

function createLegoIndexFusionUrlByKeys(templateKeys) {
  return templateKeys.map((templateKey) => {
    return createLegoIndexFusionUrl(templateKey);
  });
}

function createBargainIndexFusionUrl() {
  const url =
    "https://{FUSION_DOMAIN}/bos/bargain/{CID}/{VID}/{PRODUCT_INSTANCE_ID}/h5/index";
  return createCMsWebViewUrl(url);
}
function createBargainMineFusionUrl() {
  const url =
    "https://{FUSION_DOMAIN}/bos/bargain/{CID}/{VID}/{PRODUCT_INSTANCE_ID}/h5/mine";
  return createCMsWebViewUrl(url);
}
function createBargainDetailFusionUrl() {
  const url =
      "https://{FUSION_DOMAIN}/bos/bargain/{CID}/{VID}/{PRODUCT_INSTANCE_ID}/h5/product";
  return createCMsWebViewUrl(url);
}
module.exports = {
  createLegoIndexFusionUrlByKeys,
  createLegoIndexFusionUrl,
  createBargainIndexFusionUrl,
  createBargainMineFusionUrl,
  createBargainDetailFusionUrl
};
