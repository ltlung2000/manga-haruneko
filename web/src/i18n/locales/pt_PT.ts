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
  Frontend_Product_Description: "Downloader de Manga, Anime e Romances",
  Frontend_Setting: "Definição",
  Frontend_Settings: "Definições",
  Frontend_Help: "Ajuda",
  Frontend_About: "Sobre",
  Frontend_Plugin: "Extensão",
  Frontend_Plugins: "Extensões",
  Frontend_Plugin_List: "Lista de extensões",
  Frontend_Plugin_Select: "Selecione uma extensão",
  Frontend_Plugin_Selection: "Seleção de extensão",
  Frontend_Media: "Média",
  Frontend_Medias: "Média",
  Frontend_Media_List: "Lista de média",
  Frontend_Media_Select: "Selecionar um média",
  Frontend_Media_Selection: "Seleção de média",
  Frontend_Media_PasteLink_NotFoundError: 'The provided link is not supported (a matching website was not found): {0}',
  Frontend_Item: "Artigo",
  Frontend_Items: "artigos",
  Frontend_Item_List: "Lista de artigos",
  Frontend_Item_Select: "Selecione um artigo",
  Frontend_Item_Selection: "Seleção de artigo",
  // [SECTION]: Frontend Classic
  Frontend_Classic_Label: "Clássico",
  Frontend_Classic_Description: "A interface padrão baseada principalmente na versão anterior",
  Frontend_Classic_Settings_FuzzySearch: "Pesquisa Difusa",
  Frontend_Classic_Settings_FuzzySearchInfo: "Ativar pesquisa difusa em filtros (correspondência aproximada)",
  Frontend_Classic_Settings_Theme: "Tema",
  Frontend_Classic_Settings_ThemeInfo: "Selecionar o tema de cores para a interface do utilizador",
  Frontend_Classic_Settings_Theme_HakuNeko: 'HakuNeko',
  Frontend_Classic_Settings_Theme_CarbonWhite: "Branco de Carbono",
  Frontend_Classic_Settings_Theme_CarbonG10: "Carbono g10 (claro)",
  Frontend_Classic_Settings_Theme_CarbonG90: "Carbono g90 (escuro)",
  Frontend_Classic_Settings_Theme_CarbonG100: "Carbono g100 (escuro)",
  Frontend_Classic_Settings_Theme_SheepyNeko: 'SheepyNeko',
  Frontend_Classic_Settings_ContentPanel: "Painel de Conteúdo",
  Frontend_Classic_Settings_ContentPanelInfo: "Definir para mostrar/ocultar o painel de conteúdo",
  Frontend_Classic_Settings_SidenavTrail: 'Enable sidenav trail',
  Frontend_Classic_Settings_SidenavTrailInfo: 'Left sidenav will only appear on top left icon click',
  Frontend_Classic_Settings_SidenavIconsOnTop: 'Menu icons on top',
  Frontend_Classic_Settings_SidenavIconsOnTopInfo: 'Home and plugins buttons will appear on top instead of sidenav.',
  Frontend_Classic_Settings_ViewerMode: "Modo de Visualizador",
  Frontend_Classic_Settings_ViewerModeInfo: "Alterar como páginas/imagens serão mostradas no leitor",
  Frontend_Classic_Settings_ViewerMode_Paginated: "Paginado (Manga)",
  Frontend_Classic_Settings_ViewerMode_Longstrip: "Faixa Longa (Webtoon)",
  Frontend_Classic_Settings_ViewerReverseDirection: "Inverter Direção de Leitura",
  Frontend_Classic_Settings_ViewerReverseDirectionInfo: "Mostrar páginas/imagens em ordem inversa (como em Manga tradicional)",
  Frontend_Classic_Settings_ViewerDoublePage: "Exibir Páginas Duplas",
  Frontend_Classic_Settings_ViewerDoublePageInfo: "Mostrar duas páginas/imagens de uma vez (como no Manga tradicional)",
  Frontend_Classic_Sidenav_Home: "Início",
  Frontend_Classic_Sidenav_Settings_General: "Geral",
  Frontend_Classic_Sidenav_Settings_Interface: 'Interface',
  Frontend_Classic_Sidenav_Settings_Trackers: "Rastreadores",
  Frontend_Classic_Sidenav_Settings_Network: "Rede",
  // [SECTION]: Frontend FluentCore
  Frontend_FluentCore_Label: 'Fluent Core',
  Frontend_FluentCore_Description: "Uma interface simples sem decorações inúteis, especialmente para que os programadores verifiquem rapidamente a funcionalidade essencial",
  //
  Frontend_FluentCore_Window_ButtonMinimize_Description: "Minimizar a aplicação",
  Frontend_FluentCore_Window_ButtonMaximize_Description: "Maximizar a aplicação",
  Frontend_FluentCore_Window_ButtonRestore_Description: "Restaurar a aplicação",
  Frontend_FluentCore_Window_ButtonClose_Description: "Fechar a aplicação",
  //
  Frontend_FluentCore_Menu_Description: "Exibir menu da aplicação",
  Frontend_FluentCore_Menu_OpenSettings_Label: "Definições…",
  Frontend_FluentCore_Menu_OpenSettings_Description: "Editar as definições do aplicativo",
  Frontend_FluentCore_Menu_ImportBookmarks_Label: "Importar Marcadores…",
  Frontend_FluentCore_Menu_ImportBookmarks_Description: "Abra a caixa de diálogo para importar os marcadores de versão(ões) anterior(es)",
  Frontend_FluentCore_Menu_ExportBookmarks_Label: 'Export Bookmarks…',
  Frontend_FluentCore_Menu_ExportBookmarks_Description: 'Export all bookmarks to a file (e.g., for backup)',
  //
  Frontend_FluentCore_Settings_ThemeLuminance_Label: "Luminosidade do Tema",
  Frontend_FluentCore_Settings_ThemeLuminance_Description: "Mudar a luz/escuridão do tema",
  Frontend_FluentCore_Settings_ShowBookmarksPanel_Label: "Lista de Marcadores",
  Frontend_FluentCore_Settings_ShowBookmarksPanel_Description: 'Toggle the visibility of the bookmark list on/off',
  Frontend_FluentCore_Settings_ShowDownloadsPanel_Label: "Gestor de Transferências",
  Frontend_FluentCore_Settings_ShowDownloadsPanel_Description: 'Toggle the visibility of the download manager on/off',
  //
  Frontend_FluentCore_SettingsDialog_Title: "Definições",
  Frontend_FluentCore_SettingsDialog_CloseButton_Label: "Concluído",
  //
  Frontend_FluentCore_BookmarkList_Heading: "Marcadores",
  //
  Frontend_FluentCore_DownloadManager_Heading: "Transferências",
  Frontend_FluentCore_DownloadManagerTask_StatusQueued_Description: "Aguardando",
  Frontend_FluentCore_DownloadManagerTask_StatusPaused_Description: "Pausado",
  Frontend_FluentCore_DownloadManagerTask_StatusDownloading_Description: "Transferindo",
  Frontend_FluentCore_DownloadManagerTask_StatusProcessing_Description: "Processando",
  Frontend_FluentCore_DownloadManagerTask_StatusFailed_Description: "Falhou",
  Frontend_FluentCore_DownloadManagerTask_StatusCompleted_Description: "Concluído",
  Frontend_FluentCore_DownloadManagerTask_RemoveButton_Description: "Remover esta tarefa da lista",
  //
  Frontend_FluentCore_WebsiteSelect_Description: "Selecione um website da lista de websites disponíveis",
  Frontend_FluentCore_WebsiteSelect_UpdateEntriesButton_Description: "Clique para obter a lista de todos os títulos disponíveis no site,\ndependendo do número de solicitações, isso pode demorar um pouco",
  Frontend_FluentCore_WebsiteSelect_BusyStatus_Description: "Obtendo a lista de todos os títulos disponíveis,\ndependendo do número de solicitações, isso pode levar um tempo",
  Frontend_FluentCore_WebsiteSelect_AddFavoriteButton_Description: "Marcar este site como favorito",
  Frontend_FluentCore_WebsiteSelect_RemoveFavoriteButton_Description: "Desmarcar este site como favorito",
  Frontend_FluentCore_WebsiteSelect_OpenSettingsButton_Description: "Editar as configurações para este site",
  Frontend_FluentCore_WebsiteSelect_SearchBox_Placeholder: '',
  //
  Frontend_FluentCore_MediaTitleSelect_Description: "Selecione um título de mídia da lista de títulos disponíveis",
  Frontend_FluentCore_MediaTitleSelect_UpdateEntriesButton_Description: "Clique para obter a lista de todos os títulos disponíveis no site,\ndependendo do número de solicitações, isso pode demorar um pouco",
  Frontend_FluentCore_MediaTitleSelect_BusyStatus_Description: "Clique para obter a lista de todos os títulos disponíveis no site,\ndependendo do número de solicitações, isso pode demorar um pouco",
  Frontend_FluentCore_MediaTitleSelect_AddBookmarkButton_Description: "Adicionar este título à lista de marcadores",
  Frontend_FluentCore_MediaTitleSelect_RemoveBookmarkButton_Description: "Remover este título da lista de favoritos",
  Frontend_FluentCore_MediaTitleSelect_PasteClipboardButton_Description: "Detectar o título do link atualmente na área de transferência",
  Frontend_FluentCore_MediaTitleSelect_SearchBox_Placeholder: '',
  //
  Frontend_FluentCore_MediaItemList_Heading: "Itens de Mídia",
  Frontend_FluentCore_MediaItemList_PreviewButton_Description: "Mostrar conteúdo",
  Frontend_FluentCore_MediaItemList_DownloadButton_Description: "Baixar conteúdo",
  //
  Frontend_FluentCore_Preview_CloseButton_Description: "Fechar pré-visualização",
  //
  Frontend_FluentCore_SearchBox_ClearButton_Description: "Limpar o padrão de busca atual",
  Frontend_FluentCore_SearchBox_CaseSenstiveToggleButton_Description: "Alternar entre modo maiúsculo e minúsculo",
  Frontend_FluentCore_SearchBox_CaseRegularExpressionToggleButton_Description: "Alternar entre o modo de texto e expressão regular",
  // [SECTION]: Engine
  Settings_Global_Frontend: "Sistema operativo da interface visual",
  Settings_Global_FrontendInfo: "Selecione a interface do usuário (requer reinicialização)",
  Settings_Global_Language: "Idioma",
  Settings_Global_LanguageInfo: "Selecione o idioma para a interface do usuário",
  Settings_Global_MediaDirectory: "Diretório de Mídia",
  Settings_Global_MediaDirectoryInfo: "Selecione o diretório onde HakuNeko armazena os downloads",
  Settings_Global_MediaDirectory_UnsetError: "Nenhum diretório de download selecionado nas configurações de HakuNeko!",
  Settings_Global_MediaDirectory_PermissionError: "Permissão insuficiente para acessar o diretório de downloads!",
  Settings_Global_WebsiteSubDirectory: "Usar Sub-diretórios",
  Settings_Global_WebsiteSubDirectoryInfo: "Definir se HakuNeko deve armazenar a mídia diretamente no diretório ou usar subdiretórios por site",
  Settings_Global_DescramblingFormat: "Formato de De-Codificação",
  Settings_Global_DescramblingFormatInfo: "Selecione o formato de saída para sites que hospedam imagens embaralhadas (não se aplicará a sites que já fornecem imagens válidas)",
  Settings_Global_DescramblingQuality: "Qualidade de De-Codificação",
  Settings_Global_DescramblingQualityInfo: "Defina a qualidade em que imagens de-codificadas serão armazenadas (isto NÃO se aplicará a PNG)",
  Settings_Global_Format_PNG: 'PNG (*.png)',
  Settings_Global_Format_JPEG: 'JPEG (*.jpg)',
  Settings_Global_Format_WEBP: 'WEBP (*.webp)',
  Settings_Global_UserAgent: 'User-Agent',
  Settings_Global_UserAgentInfo: 'The User-Agent that HakuNeko will be pretend to be for each website request (leave blank to use default)',
  Settings_Global_HCaptchaToken: "Token H-Captcha",
  Settings_Global_HCaptchaTokenInfo: `Definir o token de acessibilidade para ignorar automaticamente sites que usam a proteção H-Captcha do CloudFlare`,
  Settings_Global_PostCommand: "Inserir Comando",
  Settings_Global_PostCommandInfo: '...',
  Settings_NewContent_Check: "Habilitar nova verificação de conteúdo",
  Settings_NewContent_CheckInfo: "Verificará se há um novo conteúdo disponível para leitura",
  Settings_NewContent_CheckPeriod: "Verificar novo conteúdo no período (minutos)",
  Settings_NewContent_CheckPeriodInfo: "Quantos minutos antes de verificar novamente por novos conteúdos",
  Settings_NewContent_Notify: "Habilitar notificações de conteúdo novo no desktop",
  Settings_NewContent_NotifyInfo: "Irá enviar uma notificação usando o sistema de notificação do sistema operacional",
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
  SettingsManager_Settings_AlreadyInitializedError: "Ocorreu um erro interno da aplicação: O escopo de configurações <{0}> só deve ser inicializado uma vez!",
  //
  FetchProvider_FetchGraphQL_AggregateError: 'The request failed due to the following GraphQL error(s):\n{0}',
  FetchProvider_FetchGraphQL_MissingDataError: 'The request failed due to missing GraphQL response data!',
  FetchProvider_FetchWindow_TimeoutError: "A solicitação não pode ser atendida dentro do tempo indicado!",
  FetchProvider_FetchWindow_CloudFlareError: "A solicitação falhou devido ao seguinte erro do CloudFlare: \"{0}\"",
  FetchProvider_FetchWindow_AlertCaptcha: "Por favor resolva o Captcha e espere o aplicativo continuar (não feche o site depois de resolver o Captcha)!",
  FetchProvider_Fetch_CloudFlareChallenge: 'The request to "{0}" was rejected by CloudFlare Anti-Bot detection.\nMake sure to bypass CloudFlare before accessing the content of this website (e.g., with the HakuNeko Assistant browser extension).',
  FetchProvider_Fetch_Forbidden: 'The access to "{0}" was denied.\nMake sure the website is available and accessible (e.g., VPN to bypass region lock, manual login via website link).',
  //
  BookmarkPlugin_ConvertToSerializedBookmark_UnsupportedFormatError: 'The provided data seems to be invalid/corrupted and could not be successfully de-serialized to a bookmark!',
  // [SECTION]: Tags
  Tags_Media: "Mídia",
  Tags_Media_Manga: "Mangá",
  Tags_Media_MangaDescription: "Japão, Preto e Branco, Página Única/Dupla, ...",
  Tags_Media_Manhua: 'Manhua',
  Tags_Media_ManhuaDescription: "China, Colorido, Faixa Longa, ...",
  Tags_Media_Manhwa: 'Manhwa',
  Tags_Media_ManhwaDescription: "Coreia do Sul, Colorido, Faixa Longa, ...",
  Tags_Media_Comic: "Quadrinho",
  Tags_Media_ComicDescription: "Ocidental, Colorido, ...",
  Tags_Media_Anime: 'Anime',
  Tags_Media_AnimeDescription: 'Anime, ...',
  Tags_Media_Cartoon: 'Cartoon',
  Tags_Media_CartoonDescription: 'Cartoon, ...',
  Tags_Media_Novel: 'Novel',
  Tags_Media_NovelDescription: 'Novel, ...',
  Tags_Source: "Origem",
  Tags_Source_Official: "Oficial",
  Tags_Source_Scanlator: 'Scanlator',
  Tags_Source_Aggregator: "Agregador",
  Tags_Accessibility: "Acessibilidade",
  Tags_Accessibility_RegionLock: "Bloqueio Regional",
  Tags_Accessibility_RegionLockDescription: "Acesso apenas para países desbloqueados (Geo-IP)",
  Tags_Accessibility_RateLimit: "Limite de Taxa",
  Tags_Accessibility_RateLimitDescription: "Velocidade de download limitado, IP pode ser bloqueado quando excedido",
  Tags_Rating: "Classificação",
  Tags_Rating_Safe: "Seguro",
  Tags_Rating_Suggestive: "Sugestões",
  Tags_Rating_Erotica: "Ecchi",
  Tags_Rating_Pornographic: "Hentai",
  Tags_Language: "Idioma",
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
  Tags_Others: "Outros",
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
  Tracker_Kitsu_Settings_Username: "Nome de usuário",
  Tracker_Kitsu_Settings_UsernameInfo: "Nome de usuário para login automático de conta no Kitsu",
  Tracker_Kitsu_Settings_Password: "Senha",
  Tracker_Kitsu_Settings_PasswordInfo: "Senhapara login automático de conta no Kitsu",
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
  Plugin_SheepScanlations_Settings_Username: "Nome de usuário",
  Plugin_SheepScanlations_Settings_UsernameInfo: "Nome de usuário para login automático de conta na Sheep-Scanlations 😉",
  Plugin_SheepScanlations_Settings_Password: "Senha",
  Plugin_SheepScanlations_Settings_PasswordInfo: "Senha para login automático de conta na Sheep-Scanlations 😉"
};
export default translations;