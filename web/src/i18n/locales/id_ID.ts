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
    }

    throw error;
  }
}

const translations: VariantResource = { // NOTE: Use defaults for missing translations
  //       => This is just a placeholder to ensure to be included in auto-generated translations (e.g., with crowdin)
  ...base(),
  // [SECTION]: FrontendController
  FrontendController_Reload_ConfirmNotice: 'A restart is required in order to apply the requested changes.\nAny unsaved changes will be lost and active operations (e.g., downloads) will be aborted!\n\nDo you want to perform a restart now?',
  // [SECTION]: Frontend (Common/Shared)
  Frontend_Product_Title: 'HakuNeko',
  Frontend_Product_Description: "Pengunduh Manga, Anime dan Novel",
  Frontend_Setting: "Pengaturan",
  Frontend_Settings: "Pengaturan",
  Frontend_Help: "Bantuan",
  Frontend_About: "Tentang",
  Frontend_Plugin: 'Plugin',
  Frontend_Plugins: "Plugin",
  Frontend_Plugin_List: "Daftar plugin",
  Frontend_Plugin_Select: "Pilih plugin",
  Frontend_Plugin_Selection: "Pemilihan plugin",
  Frontend_Media: 'Media',
  Frontend_Medias: 'Media',
  Frontend_Media_List: "Daftar media",
  Frontend_Media_Select: "Pilih media",
  Frontend_Media_Selection: "Pemilihan media",
  Frontend_Media_PasteLink_NotFoundError: 'The provided link is not supported (a matching website was not found): {0}',
  Frontend_Item: 'Item',
  Frontend_Items: "item",
  Frontend_Item_List: "Daftar item",
  Frontend_Item_Select: "Pilih item",
  Frontend_Item_Selection: "Pemilihan item",
  // [SECTION]: Frontend Classic
  Frontend_Classic_Label: "Klasik",
  Frontend_Classic_Description: "Tampilan depan standar sebagian besar didasarkan pada versi sebelumnya",
  Frontend_Classic_Settings_FuzzySearch: "Pencarian Fuzzy",
  Frontend_Classic_Settings_FuzzySearchInfo: "Aktifkan pencarian fuzzy pada filter (pencocokan perkiraan)",
  Frontend_Classic_Settings_Theme: "Tema",
  Frontend_Classic_Settings_ThemeInfo: "Pilih tema warna untuk antarmuka pengguna",
  Frontend_Classic_Settings_Theme_HakuNeko: 'HakuNeko',
  Frontend_Classic_Settings_Theme_CarbonWhite: 'Carbon White',
  Frontend_Classic_Settings_Theme_CarbonG10: 'Carbon g10 (light)',
  Frontend_Classic_Settings_Theme_CarbonG90: 'Carbon g90 (dark)',
  Frontend_Classic_Settings_Theme_CarbonG100: 'Carbon g100 (dark)',
  Frontend_Classic_Settings_Theme_SheepyNeko: 'SheepyNeko',
  Frontend_Classic_Settings_ContentPanel: "Panel Konten",
  Frontend_Classic_Settings_ContentPanelInfo: "Atur untuk menampilkan/menyembunyikan panel konten",
  Frontend_Classic_Settings_SidenavTrail: 'Enable sidenav trail',
  Frontend_Classic_Settings_SidenavTrailInfo: 'Left sidenav will only appear on top left icon click',
  Frontend_Classic_Settings_SidenavIconsOnTop: 'Menu icons on top',
  Frontend_Classic_Settings_SidenavIconsOnTopInfo: 'Home and plugins buttons will appear on top instead of sidenav.',
  Frontend_Classic_Settings_ViewerMode: "Modus Penonton",
  Frontend_Classic_Settings_ViewerModeInfo: "Ubah cara halaman/gambar ditampilkan dipembaca",
  Frontend_Classic_Settings_ViewerMode_Paginated: "Paginasi (Manga)",
  Frontend_Classic_Settings_ViewerMode_Longstrip: 'Longstrip (Webtoon)',
  Frontend_Classic_Settings_ViewerReverseDirection: "Balikkan Arah Bacaan",
  Frontend_Classic_Settings_ViewerReverseDirectionInfo: "Tampilkan halaman/gambar dalam urutan terbalik (seperti di Manga tradisional)",
  Frontend_Classic_Settings_ViewerDoublePage: "Tampilkan Halaman Ganda",
  Frontend_Classic_Settings_ViewerDoublePageInfo: "Tampilkan dua halaman/gambar sekaligus (seperti di Manga tradisional)",
  Frontend_Classic_Sidenav_Home: "Beranda",
  Frontend_Classic_Sidenav_Settings_General: "Umum",
  Frontend_Classic_Sidenav_Settings_Interface: "Antarmuka",
  Frontend_Classic_Sidenav_Settings_Trackers: "Pelacak",
  Frontend_Classic_Sidenav_Settings_Network: "Jaringan",
  // [SECTION]: Frontend FluentCore
  Frontend_FluentCore_Label: 'Fluent Core',
  Frontend_FluentCore_Description: 'A simple frontend with no bells and whistles, especially for developers to quickly verify essential functionality',
  //
  Frontend_FluentCore_Window_ButtonMinimize_Description: "Minimize aplikasi",
  Frontend_FluentCore_Window_ButtonMaximize_Description: "Maximize aplikasi",
  Frontend_FluentCore_Window_ButtonRestore_Description: "Restore aplikasi",
  Frontend_FluentCore_Window_ButtonClose_Description: "Tutup aplikasi",
  //
  Frontend_FluentCore_Menu_Description: "Tampilkan menu aplikasi",
  Frontend_FluentCore_Menu_OpenSettings_Label: "Pengaturan…",
  Frontend_FluentCore_Menu_OpenSettings_Description: "Edit pengaturan aplikasi",
  Frontend_FluentCore_Menu_ImportBookmarks_Label: "Impor Bookmark…",
  Frontend_FluentCore_Menu_ImportBookmarks_Description: "Buka dialog untuk mengimpor bookmark dari versi sebelumnya",
  Frontend_FluentCore_Menu_ExportBookmarks_Label: 'Export Bookmarks…',
  Frontend_FluentCore_Menu_ExportBookmarks_Description: 'Export all bookmarks to a file (e.g., for backup)',
  //
  Frontend_FluentCore_Settings_ThemeLuminance_Label: "Tema Luminance",
  Frontend_FluentCore_Settings_ThemeLuminance_Description: "Ubah tema terang/gelap",
  Frontend_FluentCore_Settings_ShowBookmarksPanel_Label: "Daftar Bookmark",
  Frontend_FluentCore_Settings_ShowBookmarksPanel_Description: 'Toggle the visibility of the bookmark list on/off',
  Frontend_FluentCore_Settings_ShowDownloadsPanel_Label: "Pengelola Unduhan",
  Frontend_FluentCore_Settings_ShowDownloadsPanel_Description: 'Toggle the visibility of the download manager on/off',
  //
  Frontend_FluentCore_SettingsDialog_Title: "Pengaturan",
  Frontend_FluentCore_SettingsDialog_CloseButton_Label: "Selesai",
  //
  Frontend_FluentCore_BookmarkList_Heading: "Bookmark",
  //
  Frontend_FluentCore_DownloadManager_Heading: "Unduhan",
  Frontend_FluentCore_DownloadManagerTask_StatusQueued_Description: "Antrian",
  Frontend_FluentCore_DownloadManagerTask_StatusPaused_Description: "Dijeda",
  Frontend_FluentCore_DownloadManagerTask_StatusDownloading_Description: "Mengunduh",
  Frontend_FluentCore_DownloadManagerTask_StatusProcessing_Description: "Diproses",
  Frontend_FluentCore_DownloadManagerTask_StatusFailed_Description: "Gagal",
  Frontend_FluentCore_DownloadManagerTask_StatusCompleted_Description: "Selesai",
  Frontend_FluentCore_DownloadManagerTask_RemoveButton_Description: "Hapus tugas ini dari daftar",
  //
  Frontend_FluentCore_WebsiteSelect_Description: "Pilih situs web dari daftar situs web yang tersedia",
  Frontend_FluentCore_WebsiteSelect_UpdateEntriesButton_Description: "Klik untuk mengambil semua daftar judul yang tersedia dari situs web, tergantung pada jumlah permintaan yang diperlukan, ini mungkin memakan waktu cukup lama",
  Frontend_FluentCore_WebsiteSelect_BusyStatus_Description: "Mengambil semua daftar judul yang tersedia, tergantung pada jumlah permintaan yang diperlukan, ini mungkin memakan waktu cukup lama",
  Frontend_FluentCore_WebsiteSelect_AddFavoriteButton_Description: "Bintangi situs web ini (tandai sebagai favorit)",
  Frontend_FluentCore_WebsiteSelect_RemoveFavoriteButton_Description: "Hapus bintang situs web ini (hapus tanda sebagai favorit)",
  Frontend_FluentCore_WebsiteSelect_OpenSettingsButton_Description: "Ubah pengaturan untuk situs web ini",
  Frontend_FluentCore_WebsiteSelect_SearchBox_Placeholder: '',
  //
  Frontend_FluentCore_MediaTitleSelect_Description: "Pilih judul media dari daftar judul media yang tersedia",
  Frontend_FluentCore_MediaTitleSelect_UpdateEntriesButton_Description: "Klik untuk mengambil semua daftar bab/episode yang tersedia dari situs web, tergantung pada jumlah permintaan yang diperlukan, ini mungkin memakan waktu cukup lama",
  Frontend_FluentCore_MediaTitleSelect_BusyStatus_Description: "Mengambil semua daftar bab/episode yang tersedia, tergantung pada jumlah permintaan yang diperlukan, ini mungkin memakan waktu cukup lama",
  Frontend_FluentCore_MediaTitleSelect_AddBookmarkButton_Description: "Tambah judul ke daftar bookmark",
  Frontend_FluentCore_MediaTitleSelect_RemoveBookmarkButton_Description: "Hapus judul ini dari daftar bookmark",
  Frontend_FluentCore_MediaTitleSelect_PasteClipboardButton_Description: "Deteksi judul dari tautan yang saat ini disalin di papan klip",
  Frontend_FluentCore_MediaTitleSelect_SearchBox_Placeholder: '',
  //
  Frontend_FluentCore_MediaItemList_Heading: "Item media",
  Frontend_FluentCore_MediaItemList_PreviewButton_Description: "Tampilkan konten",
  Frontend_FluentCore_MediaItemList_DownloadButton_Description: "Unduh konten",
  //
  Frontend_FluentCore_Preview_CloseButton_Description: "Tutup pratinjau",
  //
  Frontend_FluentCore_SearchBox_ClearButton_Description: "Bersihkan pola pencarian saat ini",
  Frontend_FluentCore_SearchBox_CaseSenstiveToggleButton_Description: "Beralih antara mode sensitif huruf dan tidak sensitif",
  Frontend_FluentCore_SearchBox_CaseRegularExpressionToggleButton_Description: "Beralih antara texs dan mode regular expression",
  // [SECTION]: Engine
  Settings_Global_Frontend: "Halaman Depan",
  Settings_Global_FrontendInfo: "Pilih antarmuka pengguna (reestart diperlukan)",
  Settings_Global_Language: "Bahasa",
  Settings_Global_LanguageInfo: "Pilih bahasa antarmuka pengguna",
  Settings_Global_MediaDirectory: "Direktori media",
  Settings_Global_MediaDirectoryInfo: "Pilih direktori dimana HakuNeko menyimpan hasil unduhan",
  Settings_Global_MediaDirectory_UnsetError: "Tidak ada direktori unduhan yang dipilih dalam pengaturan HakuNeko!",
  Settings_Global_MediaDirectory_PermissionError: "Izin tidak cukup untuk mengakses direktori unduhan!",
  Settings_Global_WebsiteSubDirectory: "Gunakan Sub-Direktori",
  Settings_Global_WebsiteSubDirectoryInfo: "Tetapkan apakah HakuNeko akan menyimpan media secara langsung di direktori, atau menggunakan subdirektori per situs web",
  Settings_Global_DescramblingFormat: 'De-Scrambling Format',
  Settings_Global_DescramblingFormatInfo: "Pilih format gambar keluaran untuk situs web yang menghosting gambar puzzled (ini TIDAK akan berlaku untuk situs web yang sudah menyediakan gambar yang valid)",
  Settings_Global_DescramblingQuality: "De-Scrambling Kualitas",
  Settings_Global_DescramblingQualityInfo: "Atur kualitas di mana gambar yang diacak akan disimpan (ini TIDAK akan berlaku untuk PNG)",
  Settings_Global_Format_PNG: 'PNG (*.png)',
  Settings_Global_Format_JPEG: 'JPEG (*.jpg)',
  Settings_Global_Format_WEBP: 'WEBP (*.webp)',
  Settings_Global_UserAgent: 'User-Agent',
  Settings_Global_UserAgentInfo: 'The User-Agent that HakuNeko will be pretend to be for each website request (leave blank to use default)',
  Settings_Global_HCaptchaToken: "Token H-Captcha",
  Settings_Global_HCaptchaTokenInfo: `Atur token aksesibilitas untuk melewati situs web yang menggunakan perlindungan H-Captcha CloudFlare secara otomatis`,
  Settings_Global_PostCommand: "Terbitkan Perintah",
  Settings_Global_PostCommandInfo: '...',
  Settings_NewContent_Check: "Aktifkan pemeriksa konten baru",
  Settings_NewContent_CheckInfo: "Akan memeriksa apakah ada konten baru yang tersedia untuk dibaca",
  Settings_NewContent_CheckPeriod: "Periksa konten baru berkala (menit)",
  Settings_NewContent_CheckPeriodInfo: "Berapa menit sebelum memeriksa lagi untuk konten baru",
  Settings_NewContent_Notify: "Aktifkan notifkasi desktop konten baru",
  Settings_NewContent_NotifyInfo: "Akan mengirimkan notifikasi menggunakan sistem notifikasi OS",
  Settings_Global_RPCEnabled: 'Enable RPC',
  Settings_Global_RPCEnabledInfo: 'Enable access for comaptible 3rd-party applications to this HakuNeko instance (e.g., HakuNeko Assistant)',
  Settings_Global_RPCPort: 'RPC Port',
  Settings_Global_RPCPortInfo: 'The communication port to be used by compatible 3rd-party applications to interact with this HakuNeko instance (e.g., HakuNeko Assistant)',
  Settings_Global_RPCSecret: 'RPC Secret',
  Settings_Global_RPCSecretInfo: 'The passphrase required by compatible 3rd-party applications to interact with this HakuNeko instance (e.g., HakuNeko Assistant)',
  //
  Settings_FeatureFlags_Label: 'Feature Flags',
  Settings_FeatureFlags_Description: 'Advanced/Experimental options especially for HakuNeko developers, contributors and power users',
  Settings_FeatureFlags_ShowSplashScreen_Label: 'Show Splash Screen',
  Settings_FeatureFlags_ShowSplashScreen_Description: 'Toggle the splash screen during application start on/off',
  Settings_FeatureFlags_ShowFetchBrowserWindows_Label: 'Show FetchBrowser Windows',
  Settings_FeatureFlags_ShowFetchBrowserWindows_Description: 'This developer focused option toggles the visibility of the browser windows for fetching data in the background on/off',
  Settings_FeatureFlags_CrowdinTranslationMode_Label: 'Enable In-Context Translation',
  Settings_FeatureFlags_CrowdinTranslationMode_Description: 'This contributor focused option toggles the localization mode for Crowdin In-Context translation on/off (Crowdin account + restart required)',
  //
  SettingsManager_Settings_AlreadyInitializedError: "Terjadi kesalahan aplikasi internal: Cakupan setelan <{0}> hanya boleh diinisialisasi sekali!",
  //
  FetchProvider_FetchGraphQL_AggregateError: 'The request failed due to the following GraphQL error(s):\n{0}',
  FetchProvider_FetchGraphQL_MissingDataError: 'The request failed due to missing GraphQL response data!',
  FetchProvider_FetchWindow_TimeoutError: "Permintaan tidak dapat dipenuhi dalam batas waktu yang diberikan!",
  FetchProvider_FetchWindow_CloudFlareError: "Permintaan gagal karena Error CloudFlare berikut: \"{0}\"",
  FetchProvider_FetchWindow_AlertCaptcha: "Silakan selesaikan Captcha dan kemudian tunggu aplikasi untuk melanjutkan (jangan tutup situs web setelah menyelesaikan Captcha)!",
  FetchProvider_Fetch_CloudFlareChallenge: 'The request to "{0}" was rejected by CloudFlare Anti-Bot detection.\nMake sure to bypass CloudFlare before accessing the content of this website (e.g., with the HakuNeko Assistant browser extension).',
  FetchProvider_Fetch_Forbidden: 'The access to "{0}" was denied.\nMake sure the website is available and accessible (e.g., VPN to bypass region lock, manual login via website link).',
  //
  BookmarkPlugin_ConvertToSerializedBookmark_UnsupportedFormatError: 'The provided data seems to be invalid/corrupted and could not be successfully de-serialized to a bookmark!',
  // [SECTION]: Tags
  Tags_Media: 'Media',
  Tags_Media_Manga: 'Manga',
  Tags_Media_MangaDescription: "Jepang, Hitam & Putih, Halaman Tunggal/Ganda, ...",
  Tags_Media_Manhua: 'Manhua',
  Tags_Media_ManhuaDescription: "China, Berwarna, Longstrip, ...",
  Tags_Media_Manhwa: 'Manhwa',
  Tags_Media_ManhwaDescription: "Korea Selatan, Berwarna, Longstrip, ...",
  Tags_Media_Comic: "Komik",
  Tags_Media_ComicDescription: "Barat, Berwarna, ...",
  Tags_Media_Anime: 'Anime',
  Tags_Media_AnimeDescription: 'Anime, ...',
  Tags_Media_Cartoon: "Kartun",
  Tags_Media_CartoonDescription: "Kartun, ...",
  Tags_Media_Novel: 'Novel',
  Tags_Media_NovelDescription: 'Novel, ...',
  Tags_Source: "Sumber",
  Tags_Source_Official: "Resmi",
  Tags_Source_Scanlator: 'Scanlator',
  Tags_Source_Aggregator: 'Aggregator',
  Tags_Accessibility: "Aksesibilitas",
  Tags_Accessibility_RegionLock: "Kunci-Wilayah",
  Tags_Accessibility_RegionLockDescription: "Akses hanya untuk negara yang tidak terkunci (Geo-IP)",
  Tags_Accessibility_RateLimit: "Batasi-Nilai",
  Tags_Accessibility_RateLimitDescription: "Kecepatan unduh terbatas, IP dapat diblokir bila terlampaui",
  Tags_Rating: 'Rating',
  Tags_Rating_Safe: "Aman",
  Tags_Rating_Suggestive: "Sugestif",
  Tags_Rating_Erotica: "Erotika",
  Tags_Rating_Pornographic: "Pornografi",
  Tags_Language: "Bahasa",
  Tags_Language_Multilingual: '🌐 Multilingual',
  Tags_Language_Arabic: '🇸🇦 Arabic',
  Tags_Language_Chinese: '🇨🇳 Chinese',
  Tags_Language_English: '🇬🇧 English',
  Tags_Language_French: '🇫🇷 French',
  Tags_Language_German: '🇩🇪 German',
  Tags_Language_Indonesian: '🇮🇩 Indonesian',
  Tags_Language_Italian: '🇮🇹 Italian',
  Tags_Language_Japanese: '🇯🇵 Japanese',
  Tags_Language_Korean: '🇰🇷 Korean',
  Tags_Language_Polish: '🇵🇱 Polish',
  Tags_Language_Portuguese: '🇵🇹🇧🇷 Portuguese',
  Tags_Language_Russian: '🇷🇺 Russian',
  Tags_Language_Spanish: '🇪🇸🇦🇷 Spanish',
  Tags_Language_Thai: '🇹🇭 Thai',
  Tags_Language_Turkish: '🇹🇷 Turkish',
  Tags_Language_Vietnamese: '🇻🇳 Vietnamese',
  Tags_Others: "Lainnya",
  // [SECTION]: Annotations
  Annotations_ViewProgress: 'Progress',
  Annotations_ViewProgressDescription: 'A custom status indicating the reading/viewing progression',
  Annotations_ViewProgress_None: '-',
  Annotations_ViewProgress_NoneDescription: 'Not yet read/viewed',
  Annotations_ViewProgress_Viewed: 'x',
  Annotations_ViewProgress_ViewedDescription: 'Already read/viewed',
  Annotations_ViewProgress_Current: 'o',
  Annotations_ViewProgress_CurrentDescription: 'Currently reading/viewing',
  // [SECTION]: Trackers
  Tracker_Kitsu_Settings_Username: "Nama Pengguna",
  Tracker_Kitsu_Settings_UsernameInfo: "Nama pengguna untuk login akun otomatis ke Kitsu",
  Tracker_Kitsu_Settings_Password: "Kata Sandi",
  Tracker_Kitsu_Settings_PasswordInfo: "Kata sandi untuk login akun otomatis ke Kitsu",
  // [SECTION]: Plugins (common)
  Plugin_Settings_ThrottlingDownloads: 'Throttle Downloads [ms]',
  Plugin_Settings_ThrottlingDownloadsInfo: '...',
  Plugin_Settings_ThrottlingInteraction: 'Interaction Rate Limit [requests/minute]',
  Plugin_Settings_ThrottlingInteractionInfo: 'Limit the number of requests to this website to prevent being blocked or banned',
  Plugin_Settings_UrlOverride: 'Url Override',
  Plugin_Settings_UrlOverrideInfo: 'Use this URL as current domain for this website',
  Plugin_Settings_ImageFormat: 'Preferred Image Format',
  Plugin_Settings_ImageFormatInfo: 'Download pictures using this file format if possible',
  Plugin_Common_MangaIndex_NotSupported: 'Unable to create the content index for this website. Use the Copy & Paste feature to directly access the content of a specific URL!',
  Plugin_Common_Chapter_UnavailableError: 'The chapter is not available (not purchased/unlocked/public)!',
  Plugin_Common_Chapter_InvalidError: 'Failed to extract the pages from the chapter content!',
  Plugin_Common_Preferred_Language: 'Preferred Language for the website',
  Plugin_Common_Preferred_LanguageInfo: 'Preferred language for website content.',
  Plugin_MissingWebsite_UpdateError: 'Failed to update the content index for a non-existing website!',
  Plugin_MissingWebsiteEntry_UpdateError: 'Failed to update the media index for a non-existing website!',
  // [SECTION]: Plugins (specific)
  Plugin_CopyManga_Settings_GlobalCDN: 'Use Global CDN',
  Plugin_CopyManga_Settings_GlobalCDNInfo: 'Requesting from the Global CDN',
  Plugin_PocketComics_LanguageMismatchError: 'Unable to find manga {0} for selected language {1}',
  Plugin_SheepScanlations_Settings_Username: "Nama Pengguna",
  Plugin_SheepScanlations_Settings_UsernameInfo: "Nama Pengguna untuk login akun otomatis ke Sheep-Scanlations 😉",
  Plugin_SheepScanlations_Settings_Password: "Kata Sandi",
  Plugin_SheepScanlations_Settings_PasswordInfo: "Kata sandi untuk login akun otomatis ke Sheep-Scanlations 😉"
};
export default translations;