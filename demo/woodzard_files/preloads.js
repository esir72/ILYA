
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.C7jITNoQ.js","/cdn/shopifycloud/checkout-web/assets/c1/app.DBDKbLBt.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.BYstU8IN.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser.GPE9pqQE.js","/cdn/shopifycloud/checkout-web/assets/c1/UnauthenticatedErrorModalPayload.dfgIn5Vq.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-mapper-load-recovery.DDzSAq2M.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-payment-due.CHf3YITC.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress.CBK6FP23.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails.DB03GwDs.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-paymentMethodFromPaymentLines.BodS36iI.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-UserPrivacySettingsSetMutation.DR_xa1oD.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-getCommonShopPayExternalTelemetryAttributes.CuTA6xOJ.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-rpc.Do-h-OIP.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation.8dkC5MVO.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate.DumRPt3c.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-browser.BdV_lqP9.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayExternalAppContext.BqYduRM7.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.Cqw_FAmF.js","/cdn/shopifycloud/checkout-web/assets/c1/OnePage.D0dFCUw_.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.DypkWpcG.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase.BMv9lo82.js","/cdn/shopifycloud/checkout-web/assets/c1/components-DeliveryTransition.DLVQvd2L.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePickupPoints.BHT-gEyi.js","/cdn/shopifycloud/checkout-web/assets/c1/AddressPresenter.RWYPWDHq.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin.DxQS8mZL.js","/cdn/shopifycloud/checkout-web/assets/c1/NoAddressLocation.Bb2trcIM.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed.DSf_krKv.js","/cdn/shopifycloud/checkout-web/assets/c1/Page.DnwwnGgO.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.CAvAhG5q.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences.qSKWmJyz.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-getNormalizedPaymentMethodName.CukE7h4_.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad.BuL-7liX.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSandboxTelemetry.h8HCY7RO.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.7PYXsr0k.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.WrgqV-0e.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation.B37FBVsg.js","/cdn/shopifycloud/checkout-web/assets/c1/EmptyState.DEVkq2T_.js","/cdn/shopifycloud/checkout-web/assets/c1/Choice.BTD_cV6N.js","/cdn/shopifycloud/checkout-web/assets/c1/Popover.C-3QTeE9.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.Cv6Fa2aw.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.9iM5QbAW.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsMonorailTrack.CMdDXRTA.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion.7AgvCyn3.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.CNP9OrK-.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.DurjfcZr.js","/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture.boEKaVDq.js","/cdn/shopifycloud/checkout-web/assets/c1/StoreCreditRedemption-StoreCreditRedemptionErrorBanner.DTewrAUj.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon.BR_rQ_I7.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-context.C6e14Uyv.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.CMbS7rK5.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine.DPfppR9a.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayProgressIntercepts.Di4aGkOL.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress.B0ta0_qC.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.CgqoRmEj.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks.CYIRQZS-.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPaySessionTokenStorage.BoGx6h0l.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit.Bxke451o.js","/cdn/shopifycloud/checkout-web/assets/c1/captcha-hooks.BbDemrb9.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button.Dnd6m5_E.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-monorail.DWar3pT2.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useAvailableShopPromotionDiscount.CVGKp68q.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.C1OwS8ad.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.DEhGJeDx.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch.phxZPZNt.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-rates-progressiveShippingRatesLoading.CuZ9jMOL.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.DG9KDyaY.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.BFcql95c.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options.DJLhFt0w.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.BXZo6VZB.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel.BkL9wxez.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.D5-_JWyJ.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea.CgsKQpgq.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.BP2kuiTZ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePaypalRowEffects.4e7iu1Mp.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot.DWNtZP4t.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.S5F6K_qp.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-publishMessage.B-NenZ8Z.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.BIoicbdo.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/UnauthenticatedErrorModalPayload.PQOzdEj1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/stopwatch.CK-PYC6i.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.RWWzwUS2.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DeliveryTransition.BbEi6fhy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StoreCreditRedemptionErrorBanner.Cm37HW0F.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPaySessionTokenStorage.CqVkJv9Z.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useOnePageFormSubmit.DGSJyFq1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayProgressIntercepts.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.HiYlaz_E.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EmptyState.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ChangeCompanyLocationLink.uqpm88mq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.7870thps.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.Dq_6Ius6.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.CLVwzp6i.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShowShopPayOptin.CpHF4L7Q.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/progressiveShippingRatesLoading.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Page.BYM12A8B.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MerchandiseModal.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.CGkrPwWj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/hooks.BxFS-Bum.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0612/6918/0654/files/Progetto_senza_titolo_-_2023-09-06T181953.660_x320.png?v=1694017212"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  