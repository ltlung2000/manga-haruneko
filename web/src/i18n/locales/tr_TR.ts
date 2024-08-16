import type { VariantResource } from '../ILocale'; // HACK: Import a reference to the en-US tranlsation itself, so the auto-generated translation files are based on the en-US translation

import enUS from './en_US';
/**
 * Get the en-US translation map, or an empty map in case of a circular (self) reference
 */

function base() {
  try {
    return enUS;
  } catch (error) {
    if (error instanceof ReferenceError) {
      return {};
    } else {
      throw error;
    }
  }
}

const translations: VariantResource = { // NOTE: Use defaults for missing translations
  //       => This is just a placeholder to ensure to be included in auto-generated translations (e.g., with crowdin)
  ...(base() as VariantResource),
  // [SECTION]: FrontendController
  FrontendController_Reload_ConfirmNotice: "Değişikliklerin uygulanabilmesi için yeniden başlatma gereklidir.\nKaydedilmemiş tüm değişiklikler kaybolacak ve aktif işlemler (örneğin, indirmeler) iptal edilecektir!\n\nŞimdi yeniden başlatmak istiyor musunuz?",
  // [SECTION]: Frontend (Common/Shared)
  Frontend_Product_Title: 'HakuNeko',
  Frontend_Product_Description: "Manga, Anime ve Roman İndiricisi",
  Frontend_Setting: "Ayar",
  Frontend_Settings: "Ayarlar",
  Frontend_Help: "Yardım",
  Frontend_About: "Hakkında",
  Frontend_Plugin: "Eklenti",
  Frontend_Plugins: "Eklentiler",
  Frontend_Plugin_List: "Eklenti listesi",
  Frontend_Plugin_Select: "Bir eklenti seçin",
  Frontend_Plugin_Selection: "Eklenti seçimi",
  Frontend_Media: "Medya",
  Frontend_Medias: "Medyalar",
  Frontend_Media_List: "Medya listesi",
  Frontend_Media_Select: "Bir medya seçin",
  Frontend_Media_Selection: "Medya seçimi",
  Frontend_Media_PasteLink_NotFoundError: "Girilen bağlantı desteklenmiyor (eşleşen bir web sitesi bulunamadı): {0}",
  Frontend_Item: "Eşya",
  Frontend_Items: "eşyalar",
  Frontend_Item_List: "Eşya listesi",
  Frontend_Item_Select: "Bir eşya seçin",
  Frontend_Item_Selection: "Eşya seçin",
  // [SECTION]: Frontend Classic
  Frontend_Classic_Label: "Klasik",
  Frontend_Classic_Description: "Standart arayüz genellikle önceki sürümü baz alır",
  Frontend_Classic_Settings_FuzzySearch: "Bulanık Arama",
  Frontend_Classic_Settings_FuzzySearchInfo: "Filtrelerde bulanık aramayı etkinleştir (yaklaşık eşleştirme)",
  Frontend_Classic_Settings_Theme: "Tema",
  Frontend_Classic_Settings_ThemeInfo: "Kullanıcı arayüzü için renk temasını seçin",
  Frontend_Classic_Settings_Theme_HakuNeko: 'HakuNeko',
  Frontend_Classic_Settings_Theme_CarbonWhite: "Karbon Beyazı",
  Frontend_Classic_Settings_Theme_CarbonG10: "Carbon g10 (Açık)",
  Frontend_Classic_Settings_Theme_CarbonG90: "Carbon g90 (Koyu)",
  Frontend_Classic_Settings_Theme_CarbonG100: "Carbon g100 (Koyu)",
  Frontend_Classic_Settings_Theme_SheepyNeko: 'SheepyNeko',
  Frontend_Classic_Settings_ContentPanel: "İçerik Paneli",
  Frontend_Classic_Settings_ContentPanelInfo: "İçerik panelini göstermek/gizlemek için ayarla",
  Frontend_Classic_Settings_SidenavTrail: "Kenar çubuğunu etkinleştir",
  Frontend_Classic_Settings_SidenavTrailInfo: "Sol kenar çubuğu yalnızca sol üst simgeye tıklandığında görünecektir",
  Frontend_Classic_Settings_SidenavIconsOnTop: "Menü simgeleri üstte",
  Frontend_Classic_Settings_SidenavIconsOnTopInfo: "Ana sayfa ve eklentiler butonu kenar çubuğu yerine üstte görünecek.",
  Frontend_Classic_Settings_ViewerMode: "İzleyici Modu",
  Frontend_Classic_Settings_ViewerModeInfo: "Sayfa/resimlerin okuyucuda nasıl gösterileceğini değiştirin",
  Frontend_Classic_Settings_ViewerMode_Paginated: "Sayfalandırılmış (Manga)",
  Frontend_Classic_Settings_ViewerMode_Longstrip: "Dikey (Webtoon)",
  Frontend_Classic_Settings_ViewerReverseDirection: "Okuma Yönünü Ters Çevir",
  Frontend_Classic_Settings_ViewerReverseDirectionInfo: "Sayfa/resimleri ters sırada göster (Manga'daki gibi)",
  Frontend_Classic_Settings_ViewerDoublePage: "Çift Sayfa Göster",
  Frontend_Classic_Settings_ViewerDoublePageInfo: "Aynı anda iki sayfa/resim gösterme (Manga'daki gibi)",
  Frontend_Classic_Sidenav_Home: "Ana Sayfa",
  Frontend_Classic_Sidenav_Settings_General: "Genel",
  Frontend_Classic_Sidenav_Settings_Interface: "Arayüz",
  Frontend_Classic_Sidenav_Settings_Trackers: "İzleyiciler",
  Frontend_Classic_Sidenav_Settings_Network: "Ağ",
  // [SECTION]: Frontend FluentCore
  Frontend_FluentCore_Label: 'Fluent Core',
  Frontend_FluentCore_Description: "Geliştiricilerin temel işlevleri hızlı bir şekilde doğrulamaları için gösterişsiz ve basit bir arayüz",
  //
  Frontend_FluentCore_Window_ButtonMinimize_Description: "Uygulamayı küçült",
  Frontend_FluentCore_Window_ButtonMaximize_Description: "Uygulamayı büyüt",
  Frontend_FluentCore_Window_ButtonRestore_Description: "Uygulamayı sıfırla",
  Frontend_FluentCore_Window_ButtonClose_Description: "Uygulamayı kapat",
  //
  Frontend_FluentCore_Menu_Description: "Uygulama menüsünü göster",
  Frontend_FluentCore_Menu_OpenSettings_Label: "Ayarlar…",
  Frontend_FluentCore_Menu_OpenSettings_Description: "Uygulama ayarlarını düzenle",
  Frontend_FluentCore_Menu_ImportBookmarks_Label: "Yer İmlerini İçe Aktar…",
  Frontend_FluentCore_Menu_ImportBookmarks_Description: "Önceki sürümlerden yer imlerini içe aktarmak için diyalog kutusunu aç",
  Frontend_FluentCore_Menu_ExportBookmarks_Label: "Yer İmlerini Dışa Aktar…",
  Frontend_FluentCore_Menu_ExportBookmarks_Description: "Tüm yer imlerini bir dosyaya aktarma ( örn. yedekleme için)",
  //
  Frontend_FluentCore_Settings_ThemeLuminance_Label: "Tema Parlaklığı",
  Frontend_FluentCore_Settings_ThemeLuminance_Description: "Temanın açıklığını/koyuluğunu değiştirin",
  Frontend_FluentCore_Settings_ShowBookmarksPanel_Label: "Yer İmi Listesi",
  Frontend_FluentCore_Settings_ShowBookmarksPanel_Description: "Yer imi listesinin görünürlüğünü aç/kapat",
  Frontend_FluentCore_Settings_ShowDownloadsPanel_Label: "İndirme Yöneticisi",
  Frontend_FluentCore_Settings_ShowDownloadsPanel_Description: "İndirme yöneticisinin görünürlüğünü aç/kapat",
  //
  Frontend_FluentCore_SettingsDialog_Title: "Ayarlar",
  Frontend_FluentCore_SettingsDialog_CloseButton_Label: "Tamamlandı",
  //
  Frontend_FluentCore_BookmarkList_Heading: "Yer İşareti",
  //
  Frontend_FluentCore_DownloadManager_Heading: "İndirilenler",
  Frontend_FluentCore_DownloadManagerTask_StatusQueued_Description: "Sıraya alındı",
  Frontend_FluentCore_DownloadManagerTask_StatusPaused_Description: "Duraklatıldı",
  Frontend_FluentCore_DownloadManagerTask_StatusDownloading_Description: "İndiriliyor",
  Frontend_FluentCore_DownloadManagerTask_StatusProcessing_Description: "İşlem Sürüyor",
  Frontend_FluentCore_DownloadManagerTask_StatusFailed_Description: "Başarısız oldu",
  Frontend_FluentCore_DownloadManagerTask_StatusCompleted_Description: "Tamamlanan",
  Frontend_FluentCore_DownloadManagerTask_RemoveButton_Description: "Bu görevi listeden kaldır",
  //
  Frontend_FluentCore_WebsiteSelect_Description: "Mevcut listeden bir web sitesi seçin",
  Frontend_FluentCore_WebsiteSelect_UpdateEntriesButton_Description: "Mevcut tüm içeriklerin listesini web sitesinden çekmek için tıklayın,\ngereken talep sayısına bağlı olarak bu işlem biraz zaman alabilir",
  Frontend_FluentCore_WebsiteSelect_BusyStatus_Description: "Mevcut tüm içeriklerin listesini getirme,\ngereken talep sayısına bağlı olarak bu işlem biraz zaman alabilir",
  Frontend_FluentCore_WebsiteSelect_AddFavoriteButton_Description: "Bu web sitesini yıldızla (favori olarak ekle)",
  Frontend_FluentCore_WebsiteSelect_RemoveFavoriteButton_Description: "Bu web sitesinin yıldızını kaldır (favorilerden kaldır)",
  Frontend_FluentCore_WebsiteSelect_OpenSettingsButton_Description: "Web sitesinin ayarlarını düzenle",
  Frontend_FluentCore_WebsiteSelect_SearchBox_Placeholder: '',
  //
  Frontend_FluentCore_MediaTitleSelect_Description: "Mevcut medya başlıkları listesinden bir medya başlığı seçin",
  Frontend_FluentCore_MediaTitleSelect_UpdateEntriesButton_Description: "Web sitesinden mevcut tüm bölümlerin listesini çekmek için tıklayın,\ngerekli talep sayısına bağlı olarak bu işlem biraz zaman alabilir",
  Frontend_FluentCore_MediaTitleSelect_BusyStatus_Description: "Mevcut tüm bölümlerin listesi indiriliyor,\ngereken işlem sayısına bağlı olarak bu biraz zaman alabilir",
  Frontend_FluentCore_MediaTitleSelect_AddBookmarkButton_Description: "Bu içeriği favorilere ekle",
  Frontend_FluentCore_MediaTitleSelect_RemoveBookmarkButton_Description: "Bu içeriği favorilerden kaldır",
  Frontend_FluentCore_MediaTitleSelect_PasteClipboardButton_Description: "Panoya kopyalanmış olan bağlantıdan içeriği algılar",
  Frontend_FluentCore_MediaTitleSelect_SearchBox_Placeholder: '',
  //
  Frontend_FluentCore_MediaItemList_Heading: "Medya Öğeleri",
  Frontend_FluentCore_MediaItemList_PreviewButton_Description: "İçeriği Göster",
  Frontend_FluentCore_MediaItemList_DownloadButton_Description: "İçeriği indir",
  //
  Frontend_FluentCore_Preview_CloseButton_Description: "Ön izlemeyi kapat",
  //
  Frontend_FluentCore_SearchBox_ClearButton_Description: "Mevcut arama şablonunu temizle",
  Frontend_FluentCore_SearchBox_CaseSenstiveToggleButton_Description: "Büyük/küçük harfe duyarlı ve duyarsız mod arasında geçiş yap",
  Frontend_FluentCore_SearchBox_CaseRegularExpressionToggleButton_Description: "Metin ve düzenli ifade modu arasında geçiş yap",
  // [SECTION]: Engine
  Settings_Global_Frontend: "Arayüz",
  Settings_Global_FrontendInfo: "Kullanıcı arayüzünü seçin (yeniden başlatma gereklidir)",
  Settings_Global_Language: "Dil",
  Settings_Global_LanguageInfo: "Kullanıcı arayüzü için dil seçin",
  Settings_Global_MediaDirectory: "Medya Dizini",
  Settings_Global_MediaDirectoryInfo: "HakuNeko'nun indirmeleri depolayacağı dizini seçin",
  Settings_Global_MediaDirectory_UnsetError: "HakuNeko ayarlarında indirme dizini seçilmedi!",
  Settings_Global_MediaDirectory_PermissionError: "İndirme dizinine erişim izni yetersiz!",
  Settings_Global_WebsiteSubDirectory: "Alt Dizinleri Kullan",
  Settings_Global_WebsiteSubDirectoryInfo: "HakuNeko'nun medyayı doğrudan dizinde mi depolayacağını yoksa web sitesi başına alt dizinler mi oluşturacağını ayarlayın",
  Settings_Global_MangaExportFormat: 'Manga/Comic Download Format',
  Settings_Global_MangaExportFormatInfo: 'The container format to store the downloaded content for mangas/comics',
  Settings_Global_MangaExportFormat_FolderWithImages: 'Folder with Images',
  Settings_Global_MangaExportFormat_ComicBookArchive: 'Comic Book Archive (*.cbz)',
  Settings_Global_MangaExportFormat_ElectronicPublication: 'E-Book Publication (*.epub)',
  Settings_Global_MangaExportFormat_PortableDocumentFormat: 'Portable Document Format (*.pdf)',
  Settings_Global_DescramblingFormat: "Karıştırma Biçimi",
  Settings_Global_DescramblingFormatInfo: "Karıştırılmış görselleri barındıran web siteleri için görsel formatını seçin (bu, halihazırda düzgün görseller sağlayan web siteleri için geçerli OLMAYACAKTIR)",
  Settings_Global_DescramblingQuality: "Karıştırma Kalitesi",
  Settings_Global_DescramblingQualityInfo: "Karıştırılan görsellerin saklanacağı kaliteyi ayarlayın (bu ayar PNG için geçerli DEĞİLDİR)",
  Settings_Global_Format_PNG: 'PNG (*.png)',
  Settings_Global_Format_JPEG: 'JPEG (*.jpg)',
  Settings_Global_Format_WEBP: 'WEBP (*.webp)',
  Settings_Global_UserAgent: "Kullanıcı Aracısı",
  Settings_Global_UserAgentInfo: "HakuNeko'nun her web sitesi isteği için taklit edeceği Kullanıcı Aracısı (varsayılanı kullanmak için boş bırakın)",
  Settings_Global_HCaptchaToken: "H-Captcha Anahtarı",
  Settings_Global_HCaptchaTokenInfo: `CloudFlare'in H-Captcha korumasını kullanan web sitelerini otomatik olarak aşmak için erişilebilirlik anahtarını ayarlayın`,
  Settings_Global_PostCommand: "Komut Gönder",
  Settings_Global_PostCommandInfo: '...',
  Settings_NewContent_Check: "Yeni içerik kontrolcüsünü etkinleştir",
  Settings_NewContent_CheckInfo: "Okunabilecek yeni içerik olup olmadığını kontrol eder",
  Settings_NewContent_CheckPeriod: "Yeni içeriği kontrol süresi (dakika)",
  Settings_NewContent_CheckPeriodInfo: "Yeni içerikleri tekrar kontrol etmeden önce kaç dakika",
  Settings_NewContent_Notify: "Yeni içerik masaüstü bildirimini etkinleştir",
  Settings_NewContent_NotifyInfo: "İşletim sisteminin bildirim özelliğini kullanarak bir bildirim gönderir",
  Settings_Global_RPCEnabled: "RPC'yi Etkinleştir",
  Settings_Global_RPCEnabledInfo: "HakuNeko uygulamasıyla uyumlu 3. taraf uygulamalar için erişimi etkinleştirin (örn. HakuNeko Assistant)",
  Settings_Global_RPCPort: "RPC Portu",
  Settings_Global_RPCPortInfo: "Bu HakuNeko uygulamasıyla etkileşim kurmak için uyumlu 3. taraf uygulamalar tarafından kullanılacak iletişim portu (örn. HakuNeko Assistant)",
  Settings_Global_RPCSecret: "RPC Şifresi",
  Settings_Global_RPCSecretInfo: "Uyumlu 3. taraf uygulamaların HakuNeko uygulamasıyla etkileşim kurması için gereken parola (örn. HakuNeko Assistant)",
  //
  Settings_FeatureFlags_Label: "Özellik Bayrakları",
  Settings_FeatureFlags_Description: "Özellikle HakuNeko geliştiricileri, katkıda bulunanlar ve uzman kullanıcılar için Gelişmiş/Deneysel seçenekler",
  Settings_FeatureFlags_ShowSplashScreen_Label: "Açılış Ekranını Göster",
  Settings_FeatureFlags_ShowSplashScreen_Description: "Uygulama başlangıcı sırasında açılış ekranını açma/kapama",
  Settings_FeatureFlags_ShowFetchBrowserWindows_Label: "FetchBrowser Pencerelerini Göster",
  Settings_FeatureFlags_ShowFetchBrowserWindows_Description: "Geliştiricilere özel bu seçenek, arka planda kullanılan verileri yakalamak için gereken tarayıcı pencerelerinin görünürlüğünü açar/kapatır",
  Settings_FeatureFlags_CrowdinTranslationMode_Label: "Bağlam İçi Çeviriyi Etkinleştir",
  Settings_FeatureFlags_CrowdinTranslationMode_Description: "Bu katkıda bulunan odaklı seçenek, Crowdin Bağlam İçi çeviri için yerelleştirme modunu açar/kapatır (Crowdin hesabı + yeniden başlatma gerekli)",
  //
  SettingsManager_Settings_AlreadyInitializedError: "Bir sistem hatası oluştu: <{0}> kapsamındaki ayarlar yalnızca bir kez başlatılmalıdır!",
  //
  FetchProvider_FetchGraphQL_AggregateError: "İstek aşağıdaki GraphQL hata(ları) nedeniyle başarısız oldu:\n{0}",
  FetchProvider_FetchGraphQL_MissingDataError: "İstek, eksik GraphQL yanıt verileri nedeniyle başarısız oldu!",
  FetchProvider_FetchWindow_TimeoutError: "İstek, belirtilen süre içerisinde yerine getirilemedi!",
  FetchProvider_FetchWindow_CloudFlareError: "İstek aşağıdaki CloudFlare Hatası nedeniyle başarısız oldu: \"{0}\"",
  FetchProvider_FetchWindow_AlertCaptcha: "Lütfen Captcha'yı çözün ve ardından uygulamanın ilerlemesini bekleyin (Captcha'yı çözdükten sonra web sitesini kapatmayın)!",
  FetchProvider_Fetch_CloudFlareChallenge: 'The request to "{0}" was rejected by CloudFlare Anti-Bot detection.\nMake sure to bypass CloudFlare before accessing the content of this website (e.g., with the HakuNeko Assistant browser extension).',
  FetchProvider_Fetch_Forbidden: 'The access to "{0}" was denied.\nMake sure the website is available and accessible (e.g., VPN to bypass region lock, manual login via website link).',
  //
  BookmarkPlugin_ConvertToSerializedBookmark_UnsupportedFormatError: "Sağlanan veriler geçersiz/bozuk görünüyor ve bir yer imine başarılı bir şekilde ayrıştırılamadı!",
  // [SECTION]: Tags
  Tags_Media: "Medya",
  Tags_Media_Manga: 'Manga',
  Tags_Media_MangaDescription: "Japon, Siyah & Beyaz, Tek/Çift Sayfalı, ...",
  Tags_Media_Manhua: 'Manhua',
  Tags_Media_ManhuaDescription: "Çin, Renkli, Uzun Şeritli, ...",
  Tags_Media_Manhwa: 'Manhwa',
  Tags_Media_ManhwaDescription: "Güney Kore, Renkli, Uzun Şeritli, ...",
  Tags_Media_Comic: "Çizgi Roman",
  Tags_Media_ComicDescription: "Batı, Renkli, ...",
  Tags_Media_Anime: 'Anime',
  Tags_Media_AnimeDescription: 'Anime, ...',
  Tags_Media_Cartoon: "Karikatür",
  Tags_Media_CartoonDescription: "Karikatür, ...",
  Tags_Media_Novel: "Roman",
  Tags_Media_NovelDescription: "Roman, ...",
  Tags_Source: "Kaynak",
  Tags_Source_Official: "Resmi",
  Tags_Source_Scanlator: "Fan Grubu",
  Tags_Source_Aggregator: "Koleksiyoncu",
  Tags_Accessibility: "Erişilebilirlik",
  Tags_Accessibility_DomainRotation: 'Domain Rotation',
  Tags_Accessibility_DomainRotationDescription: 'Regular changing its (sub-)domain, probably to avoid scraping or DMCA',
  Tags_Accessibility_RegionLock: "Bölge Kilidi",
  Tags_Accessibility_RegionLockDescription: "Yalnızca erişime açık ülkeler içindir (Geo-IP)",
  Tags_Accessibility_RateLimit: "Oran Sınırı",
  Tags_Accessibility_RateLimitDescription: "Sınırlı indirme hızı, aşıldığında IP engellenebilir",
  Tags_Rating: "Derecelendirme",
  Tags_Rating_Safe: "Güvenilir",
  Tags_Rating_Suggestive: "Öneri",
  Tags_Rating_Erotica: "Erotik",
  Tags_Rating_Pornographic: "Pornografik",
  Tags_Language: "Dil",
  Tags_Language_Multilingual: "🌐 Çok Dilli",
  Tags_Language_Arabic: "🇸🇦 Arapça",
  Tags_Language_Chinese: "🇨🇳 Çince",
  Tags_Language_English: "🇬🇧 İngilizce",
  Tags_Language_French: "🇫🇷 Fransızca",
  Tags_Language_German: "🇩🇪 Almanca",
  Tags_Language_Indonesian: "🇮🇩 Endonezce",
  Tags_Language_Italian: "🇮🇹 İtalyanca",
  Tags_Language_Japanese: "🇯🇵 Japonca",
  Tags_Language_Korean: "🇰🇷 Korece",
  Tags_Language_Polish: "🇵🇱 Lehçe",
  Tags_Language_Portuguese: "🇵🇹🇧🇷 Portekizce",
  Tags_Language_Russian: "🇷🇺 Rusça",
  Tags_Language_Spanish: "🇪🇸🇦🇷 İspanyolca",
  Tags_Language_Thai: "🇹🇭 Tayca",
  Tags_Language_Turkish: "🇹🇷 Türkçe",
  Tags_Language_Vietnamese: "🇻🇳 Vietnamca",
  Tags_Others: "Diğer",
  // [SECTION]: Annotations
  Annotations_ViewProgress: "İlerleme Durumu",
  Annotations_ViewProgressDescription: "Okuma/izleme ilerlemesini belirten özel bir bildirim",
  Annotations_ViewProgress_None: '-',
  Annotations_ViewProgress_NoneDescription: "Okumadım/izlemedim",
  Annotations_ViewProgress_Viewed: 'x',
  Annotations_ViewProgress_ViewedDescription: "Okudum/izledim",
  Annotations_ViewProgress_Current: 'o',
  Annotations_ViewProgress_CurrentDescription: "Okuyorum/izliyorum",
  // [SECTION]: Trackers
  Tracker_Kitsu_Settings_Username: "Kullanıcı Adı",
  Tracker_Kitsu_Settings_UsernameInfo: "Kitsu'da otomatik hesap girişi için kullanıcı adı",
  Tracker_Kitsu_Settings_Password: "Şifre",
  Tracker_Kitsu_Settings_PasswordInfo: "Kitsu'da otomatik hesap girişi için şifre",
  // [SECTION]: Plugins (common)
  Plugin_Settings_ThrottlingDownloads: "Hız Düşürmeler [ms]",
  Plugin_Settings_ThrottlingDownloadsInfo: '...',
  Plugin_Settings_ThrottlingInteraction: "Etkileşim Oranı Sınırı [istek/dakika]",
  Plugin_Settings_ThrottlingInteractionInfo: "Engellenmeyi veya yasaklanmayı önlemek için web sitesine yapılan istek sayısını sınırlayın",
  Plugin_Settings_UrlOverride: "URL Geçersiz Kılma",
  Plugin_Settings_UrlOverrideInfo: "Bu URL'yi bu web sitesi için geçerli alan adı olarak kullanın",
  Plugin_Settings_ImageFormat: "Tercih Edilen Resim Formatı",
  Plugin_Settings_ImageFormatInfo: "Mümkünse bu dosya biçimini kullanarak resimleri indirin",
  Plugin_Common_MangaIndex_NotSupported: "Bu web sitesi için içerik dizini oluşturulamıyor. Belirli bir URL'nin içeriğine doğrudan erişmek için Kopyala ve Yapıştır özelliğini kullanın!",
  Plugin_Common_Chapter_UnavailableError: "Bölüm mevcut değil (satın alınmadı/kilidi açılmadı/halka açık değil)!",
  Plugin_Common_Chapter_InvalidError: "Sayfalar bölüm içeriğinden ayıklanamadı!",
  Plugin_Common_Preferred_Language: "Web Sitesi için Tercih Edilen Dil",
  Plugin_Common_Preferred_LanguageInfo: "Web site içeriği için tercih edilen dil.",
  Plugin_MissingWebsite_UpdateError: "Var olmayan bir web sitesi için içerik dizini güncellenemedi!",
  Plugin_MissingWebsiteEntry_UpdateError: "Var olmayan bir web sitesi için medya dizini güncellenemedi!",
  // [SECTION]: Plugins (specific)
  Plugin_CopyManga_Settings_GlobalCDN: "Global CDN Kullan",
  Plugin_CopyManga_Settings_GlobalCDNInfo: "Global CDN'den talepte bulunma",
  Plugin_PocketComics_LanguageMismatchError: "Seçili dil {1} için {0} mangası bulunamıyor",
  Plugin_SheepScanlations_Settings_Username: "Kullanıcı Adı",
  Plugin_SheepScanlations_Settings_UsernameInfo: "Sheep-Scanlations'a otomatik hesap girişi için kullanıcı adı 😉",
  Plugin_SheepScanlations_Settings_Password: "Şifre",
  Plugin_SheepScanlations_Settings_PasswordInfo: "Sheep-Scanlations'a otomatik hesap girişi için şifre 😉"
};
export default translations;