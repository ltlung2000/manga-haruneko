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
  FrontendController_Reload_ConfirmNotice: "Un redémarrage est nécessaire pour appliquer les changements demandés.\nToute modification non sauvegardée sera perdue et les opérations actives (par exemple, les téléchargements) seront interrompues !\n\nVoulez-vous redémarrer maintenant ?",
  // [SECTION]: Frontend (Common/Shared)
  Frontend_Product_Title: 'HakuNeko',
  Frontend_Product_Description: "Téléchargeur de Mangas, Animés et Romans",
  Frontend_Setting: "Paramètre",
  Frontend_Settings: "Paramètres",
  Frontend_Help: "Aide",
  Frontend_About: "À propos",
  Frontend_Plugin: 'Plugin',
  Frontend_Plugins: 'Plugins',
  Frontend_Plugin_List: "Liste des Plugins",
  Frontend_Plugin_Select: "Sélectionner un plugin",
  Frontend_Plugin_Selection: "Sélection de plugin",
  Frontend_Media: "Titre",
  Frontend_Medias: "Titres",
  Frontend_Media_List: "Liste de titres",
  Frontend_Media_Select: "Sélectionner un titre",
  Frontend_Media_Selection: "Sélection de média",
  Frontend_Media_PasteLink_NotFoundError: "Le lien fourni n'est pas pris en charge (aucun site web correspondant n'a été trouvé) : {0}",
  Frontend_Item: "Épisode",
  Frontend_Items: "Épisodes",
  Frontend_Item_List: "Liste des épisodes",
  Frontend_Item_Select: "Sélectionner un épisode",
  Frontend_Item_Selection: "Sélection d'épisode",
  // [SECTION]: Frontend Classic
  Frontend_Classic_Label: "Classique",
  Frontend_Classic_Description: "L'interface standard principalement basée sur la version précédente",
  Frontend_Classic_Settings_FuzzySearch: "Recherche approximative",
  Frontend_Classic_Settings_FuzzySearchInfo: "Activer la recherche approximative sur les filtres",
  Frontend_Classic_Settings_Theme: "Thème",
  Frontend_Classic_Settings_ThemeInfo: "Sélectionnez les couleurs de l'interface utilisateur",
  Frontend_Classic_Settings_Theme_HakuNeko: 'HakuNeko',
  Frontend_Classic_Settings_Theme_CarbonWhite: "Blanc carbone",
  Frontend_Classic_Settings_Theme_CarbonG10: "Carbon g10 (clair)",
  Frontend_Classic_Settings_Theme_CarbonG90: "Carbon g90 (sombre)",
  Frontend_Classic_Settings_Theme_CarbonG100: "Carbone g100 (sombre)",
  Frontend_Classic_Settings_Theme_SheepyNeko: 'SheepyNeko',
  Frontend_Classic_Settings_ContentPanel: "Panneau de contenu",
  Frontend_Classic_Settings_ContentPanelInfo: "Afficher/masquer le panneau de contenu",
  Frontend_Classic_Settings_SidenavTrail: "Afficher la barre latérale",
  Frontend_Classic_Settings_SidenavTrailInfo: "Sinon la barre latérale gauche n'apparaîtra qu'en cliquant sur l'icône en haut à gauche",
  Frontend_Classic_Settings_SidenavIconsOnTop: "Icônes du menu en haut",
  Frontend_Classic_Settings_SidenavIconsOnTopInfo: "Les boutons d'accueil et de plugins apparaîtront en haut à la place de la barre latérale.",
  Frontend_Classic_Settings_ViewerMode: "Mode d'affichage",
  Frontend_Classic_Settings_ViewerModeInfo: "Modifier la façon dont les pages/images sont affichées dans le lecteur",
  Frontend_Classic_Settings_ViewerMode_Paginated: "Paginé (Manga)",
  Frontend_Classic_Settings_ViewerMode_Longstrip: "Vertical (Webtoon)",
  Frontend_Classic_Settings_ViewerReverseDirection: "Inverser le sens de lecture",
  Frontend_Classic_Settings_ViewerReverseDirectionInfo: "Afficher les pages/images dans l'ordre inverse (comme dans les mangas traditionnels)",
  Frontend_Classic_Settings_ViewerDoublePage: "Afficher en double-page",
  Frontend_Classic_Settings_ViewerDoublePageInfo: "Afficher deux pages/images à la fois (comme dans les mangas traditionnels)",
  Frontend_Classic_Sidenav_Home: "Accueil",
  Frontend_Classic_Sidenav_Settings_General: "Général",
  Frontend_Classic_Sidenav_Settings_Interface: 'Interface',
  Frontend_Classic_Sidenav_Settings_Trackers: "Traqueurs",
  Frontend_Classic_Sidenav_Settings_Network: "Réseau",
  // [SECTION]: Frontend FluentCore
  Frontend_FluentCore_Label: 'Fluent Core',
  Frontend_FluentCore_Description: "Une interface simple sans licornes ni paillettes, surtout pour les développeurs pour vérifier rapidement les fonctionnalités essentielles",
  //
  Frontend_FluentCore_Window_ButtonMinimize_Description: "Réduire l'application",
  Frontend_FluentCore_Window_ButtonMaximize_Description: "Agrandir l'application",
  Frontend_FluentCore_Window_ButtonRestore_Description: "Réduire l'application",
  Frontend_FluentCore_Window_ButtonClose_Description: "Fermer l'application",
  //
  Frontend_FluentCore_Menu_Description: "Afficher le menu de l'application",
  Frontend_FluentCore_Menu_OpenSettings_Label: "Paramètres…",
  Frontend_FluentCore_Menu_OpenSettings_Description: "Modifier les paramètres de l'application",
  Frontend_FluentCore_Menu_ImportBookmarks_Label: "Importer les favoris…",
  Frontend_FluentCore_Menu_ImportBookmarks_Description: "Ouvrir la boîte de dialogue pour importer des favoris d'une version précédente",
  Frontend_FluentCore_Menu_ExportBookmarks_Label: "Exporter les marque-pages…",
  Frontend_FluentCore_Menu_ExportBookmarks_Description: "Exporter les marque-pages vers un fichier (par exemple, pour la sauvegarde)",
  //
  Frontend_FluentCore_Settings_ThemeLuminance_Label: "Luminosité du thème",
  Frontend_FluentCore_Settings_ThemeLuminance_Description: "Rendre le thème plus clair/sombre",
  Frontend_FluentCore_Settings_ShowBookmarksPanel_Label: "Liste des favoris",
  Frontend_FluentCore_Settings_ShowBookmarksPanel_Description: "Afficher/masquer la liste des favoris",
  Frontend_FluentCore_Settings_ShowDownloadsPanel_Label: "Gestionnaire des téléchargements",
  Frontend_FluentCore_Settings_ShowDownloadsPanel_Description: "Afficher/Masquer le gestionnaire de téléchargement",
  //
  Frontend_FluentCore_SettingsDialog_Title: "Paramètres",
  Frontend_FluentCore_SettingsDialog_CloseButton_Label: "Terminé",
  //
  Frontend_FluentCore_BookmarkList_Heading: "Favoris",
  //
  Frontend_FluentCore_DownloadManager_Heading: "Téléchargements",
  Frontend_FluentCore_DownloadManagerTask_StatusQueued_Description: "En attente",
  Frontend_FluentCore_DownloadManagerTask_StatusPaused_Description: "Suspendu(s)",
  Frontend_FluentCore_DownloadManagerTask_StatusDownloading_Description: "Téléchargement en cours",
  Frontend_FluentCore_DownloadManagerTask_StatusProcessing_Description: "Traitement en cours",
  Frontend_FluentCore_DownloadManagerTask_StatusFailed_Description: "Échec",
  Frontend_FluentCore_DownloadManagerTask_StatusCompleted_Description: "Terminée",
  Frontend_FluentCore_DownloadManagerTask_RemoveButton_Description: "Retirer la tâche de la liste",
  //
  Frontend_FluentCore_WebsiteSelect_Description: "Sélectionner un site Web dans la liste des sites disponibles",
  Frontend_FluentCore_WebsiteSelect_UpdateEntriesButton_Description: "Cliquez pour récupérer la liste de tous les titres disponibles sur le site,\nen fonction du nombre de requêtes nécessaires, cela peut prendre un certain temps",
  Frontend_FluentCore_WebsiteSelect_BusyStatus_Description: "Récupération de la liste de tous les titres disponibles,\nselon le nombre de requêtes nécessaires, cela peut prendre un certain temps",
  Frontend_FluentCore_WebsiteSelect_AddFavoriteButton_Description: "Mettre ce site en favori",
  Frontend_FluentCore_WebsiteSelect_RemoveFavoriteButton_Description: "Retirer ce site des favoris",
  Frontend_FluentCore_WebsiteSelect_OpenSettingsButton_Description: "Modifier les paramètres pour ce site",
  Frontend_FluentCore_WebsiteSelect_SearchBox_Placeholder: '',
  //
  Frontend_FluentCore_MediaTitleSelect_Description: "Sélectionnez un titre de média dans la liste des titres de média disponibles",
  Frontend_FluentCore_MediaTitleSelect_UpdateEntriesButton_Description: "Cliquer pour récupérer la liste de tous les chapitres/épisodes disponibles sur le site,\nselon le nombre de requêtes nécessaires cela peut prendre un certain temps",
  Frontend_FluentCore_MediaTitleSelect_BusyStatus_Description: "Récupération de la liste de tous les chapitres/épisodes disponibles,\nselon le nombre de requêtes nécessaires, cela peut prendre un certain temps",
  Frontend_FluentCore_MediaTitleSelect_AddBookmarkButton_Description: "Ajouter ce titre à la liste des favoris",
  Frontend_FluentCore_MediaTitleSelect_RemoveBookmarkButton_Description: "Retirer ce titre de la liste des favoris",
  Frontend_FluentCore_MediaTitleSelect_PasteClipboardButton_Description: "Détecter le titre à partir du lien actuellement copié dans le presse-papiers",
  Frontend_FluentCore_MediaTitleSelect_SearchBox_Placeholder: '',
  //
  Frontend_FluentCore_MediaItemList_Heading: "Épisodes",
  Frontend_FluentCore_MediaItemList_PreviewButton_Description: "Afficher le contenu",
  Frontend_FluentCore_MediaItemList_DownloadButton_Description: "Télécharger le contenu",
  //
  Frontend_FluentCore_Preview_CloseButton_Description: "Fermer l'aperçu",
  //
  Frontend_FluentCore_SearchBox_ClearButton_Description: "Réinitialiser les critères de recherche",
  Frontend_FluentCore_SearchBox_CaseSenstiveToggleButton_Description: "Ignorer ou pas les majuscules",
  Frontend_FluentCore_SearchBox_CaseRegularExpressionToggleButton_Description: "Basculer entre le mode texte et expression régulière",
  // [SECTION]: Engine
  Settings_Global_Frontend: "Interface",
  Settings_Global_FrontendInfo: "Sélectionner l'interface utilisateur (redémarrage nécessaire)",
  Settings_Global_Language: "Langue",
  Settings_Global_LanguageInfo: "Sélectionner la langue de l'interface utilisateur",
  Settings_Global_MediaDirectory: "Répertoire des médias",
  Settings_Global_MediaDirectoryInfo: "Sélectionner le répertoire où HakuNeko stocke les téléchargements",
  Settings_Global_MediaDirectory_UnsetError: "Aucun répertoire de téléchargement sélectionné dans les paramètres de HakuNeko !",
  Settings_Global_MediaDirectory_PermissionError: "Autorisations insuffisantes pour accéder au répertoire de téléchargement !",
  Settings_Global_WebsiteSubDirectory: "Utiliser les sous-répertoires",
  Settings_Global_WebsiteSubDirectoryInfo: "Définissez si HakuNeko doit stocker les médias directement dans le répertoire ou utiliser des sous-répertoires par site web",
  Settings_Global_MangaExportFormat: "Format de téléchargement des Manga/BD",
  Settings_Global_MangaExportFormatInfo: "Format de stockage du contenu téléchargé pour mangas/BD",
  Settings_Global_MangaExportFormat_FolderWithImages: "Dossier avec images",
  Settings_Global_MangaExportFormat_ComicBookArchive: "Archive de BD (*.cbz)",
  Settings_Global_MangaExportFormat_ElectronicPublication: "Publication E-Book (*.epub)",
  Settings_Global_MangaExportFormat_PortableDocumentFormat: 'Portable Document Format (*.pdf)',
  Settings_Global_DescramblingFormat: "Format après déchiffrement",
  Settings_Global_DescramblingFormatInfo: "Sélectionner le format d'image de sortie pour les sites hébergeant des images chiffrées (cela ne s'appliquera PAS aux sites fournissant déjà des images valides)",
  Settings_Global_DescramblingQuality: "Qualité après déchiffrement",
  Settings_Global_DescramblingQualityInfo: "Définissez la qualité dans laquelle les images déchiffrées doivent être stockées (cela ne s'appliquera PAS au PNG)",
  Settings_Global_Format_PNG: 'PNG (*.png)',
  Settings_Global_Format_JPEG: 'JPEG (*.jpg)',
  Settings_Global_Format_WEBP: 'WEBP (*.webp)',
  Settings_Global_UserAgent: 'User-Agent',
  Settings_Global_UserAgentInfo: "L'agent utilisateur que HakuNeko prétendra être pour chaque demande de site web (laisser vide pour utiliser la valeur de défaut)",
  Settings_Global_HCaptchaToken: "Jeton des H-Captcha",
  Settings_Global_HCaptchaTokenInfo: `Définissez le jeton d'accessibilité pour contourner automatiquement les sites qui utilisent la protection H-Captcha de CloudFlare`,
  Settings_Global_PostCommand: "Post-Commande",
  Settings_Global_PostCommandInfo: '...',
  Settings_NewContent_Check: "Activer le nouveau gestionnaire de contenu",
  Settings_NewContent_CheckInfo: "Vérifiera s'il y a de nouveaux contenus disponibles à lire",
  Settings_NewContent_CheckPeriod: "Récurrence du gestionnaire de contenu (min)",
  Settings_NewContent_CheckPeriodInfo: "Combien de minutes avant de revérifier s'il y a de nouveaux contenus",
  Settings_NewContent_Notify: "Notifications lors de nouveaux contenus",
  Settings_NewContent_NotifyInfo: "Envoie une notification en utilisant le système de notification de l'OS",
  Settings_Global_RPCEnabled: "Activer RPC",
  Settings_Global_RPCEnabledInfo: "Activer l'accès aux applications tierces compatibles à cette instance d'HakuNeko (par exemple, l'assistant HakuNeko)",
  Settings_Global_RPCPort: "Port RPC",
  Settings_Global_RPCPortInfo: "Le port de communication à utiliser par des applications tierces compatibles pour interagir avec cette instance d'HakuNeko (par exemple HakuNeko Assistant)",
  Settings_Global_RPCSecret: "Secret du RPC",
  Settings_Global_RPCSecretInfo: "Le mot de passe requis par les applications tierces compatibles pour interagir avec cette instance d'HakuNeko (par exemple, l'assistant HakuNeko)",
  //
  Settings_FeatureFlags_Label: "Indicateurs de fonctionnalités",
  Settings_FeatureFlags_Description: "Options avancées/expérimentales spécialement pour les développeurs, les contributeurs et les utilisateurs expérimentés d'HakuNeko",
  Settings_FeatureFlags_ShowSplashScreen_Label: "Montrer l'écran de démarrage",
  Settings_FeatureFlags_ShowSplashScreen_Description: "Activer/désactiver l'écran de démarrage lors du démarrage de l'application",
  Settings_FeatureFlags_ShowFetchBrowserWindows_Label: "Afficher les fenêtres FetchBrowser",
  Settings_FeatureFlags_ShowFetchBrowserWindows_Description: "Cette option destinée aux développeurs permet d'activer ou de désactiver la visibilité des fenêtres du navigateur pour la recherche de données en arrière-plan",
  Settings_FeatureFlags_CrowdinTranslationMode_Label: "Activer les traductions dans le contexte",
  Settings_FeatureFlags_CrowdinTranslationMode_Description: "Cette option axée sur le contributeur permet d'activer ou de désactiver le mode de localisation pour la traduction Crowdin In-Context (compte Crowdin + redémarrage requis)",
  //
  SettingsManager_Settings_AlreadyInitializedError: "Une erreur interne est survenue : la portée <{0}> des paramètres ne doit être initialisée qu'une seule fois !",
  //
  FetchProvider_FetchGraphQL_AggregateError: "La requête a échoué en raison de l'erreur (des erreurs) GraphQL suivante(s) :\n{0}",
  FetchProvider_FetchGraphQL_MissingDataError: "La requête a échoué en raison de données de réponse GraphQL manquantes !",
  FetchProvider_FetchWindow_TimeoutError: "La requête n'a pas pu être accomplie dans le délai imparti !",
  FetchProvider_FetchWindow_CloudFlareError: "La requête a échoué en raison de l'erreur CloudFlare suivante : \"{0}\"",
  FetchProvider_FetchWindow_AlertCaptcha: "Veuillez résoudre le Captcha et attendre que l'application continue (ne fermez pas le site web après avoir résolu le Captcha) !",
  FetchProvider_Fetch_CloudFlareChallenge: "La demande adressée à \"{0}\" a été rejetée par la détection anti-bot de CloudFlare.\nVeillez à contourner CloudFlare avant d'accéder au contenu de ce site web (par exemple, avec l'extension de navigateur HakuNeko Assistant).",
  FetchProvider_Fetch_VercelChallenge: "La requête vers \"{0}\" a été rejetée par le mode Attack Challenge de Vercel.\nMerci de vérifier que vous avez bypass Vercel avant d'essayer d'accéder au contenu de ce site.",
  FetchProvider_Fetch_Forbidden: "L'accès à «{0}» a été refusé.\nAssurez-vous que le site Web est disponible et accessible (par exemple, VPN pour contourner le verrouillage régional, connexion manuelle via le lien du site).",
  //
  BookmarkPlugin_ConvertToSerializedBookmark_UnsupportedFormatError: "Les données fournies semblent être invalides/corrompues et ne peuvent pas être désérialisées avec succès vers un marque-page !",
  // [SECTION]: Tags
  Tags_Media: "Média",
  Tags_Media_Manga: 'Manga',
  Tags_Media_MangaDescription: "Japon, Noir et Blanc, Mono/Double Page, ...",
  Tags_Media_Manhua: 'Manhua',
  Tags_Media_ManhuaDescription: "Chine, Coloré, Webtoon, ...",
  Tags_Media_Manhwa: 'Manhwa',
  Tags_Media_ManhwaDescription: "Corée du Sud, Coloré, Webtoon, ...",
  Tags_Media_Comic: 'Comic',
  Tags_Media_ComicDescription: "Occident, Coloré, ...",
  Tags_Media_Anime: "Animé",
  Tags_Media_AnimeDescription: "Animé, ...",
  Tags_Media_Cartoon: "Dessin animé",
  Tags_Media_CartoonDescription: "Dessin animé, ...",
  Tags_Media_Novel: "Roman",
  Tags_Media_NovelDescription: "Roman, ...",
  Tags_Source: 'Source',
  Tags_Source_Official: "Officiel",
  Tags_Source_Scanlator: "Traducteur",
  Tags_Source_Aggregator: "Agrégateur",
  Tags_Accessibility: "Accessibilité",
  Tags_Accessibility_DomainRotation: "Changement du domaine",
  Tags_Accessibility_DomainRotationDescription: "Change régulièrement ses (sous-) domaines, probablement pour faire face au scrapping ou aux DMCA",
  Tags_Accessibility_RegionLock: "Verrouillage régional",
  Tags_Accessibility_RegionLockDescription: "Accès uniquement pour les pays sans blocage géographique (IP)",
  Tags_Accessibility_RateLimit: "Limite de débit",
  Tags_Accessibility_RateLimitDescription: "Vitesse de téléchargement limitée, en cas d'excès l'IP peut être bloquée",
  Tags_Rating: "Classification",
  Tags_Rating_Safe: "Sûr",
  Tags_Rating_Suggestive: "Aguicheur",
  Tags_Rating_Erotica: "Érotique",
  Tags_Rating_Pornographic: "Pornographique",
  Tags_Language: "Langue",
  Tags_Language_Multilingual: "🌐 Multilingue",
  Tags_Language_Arabic: "🇸🇦 Arabe",
  Tags_Language_Chinese: "🇨🇳 Chinois",
  Tags_Language_English: "🇬🇧 Anglais",
  Tags_Language_French: "🇫🇷 Français",
  Tags_Language_German: "🇩🇪 Allemand",
  Tags_Language_Indonesian: "🇮🇩 Indonésien",
  Tags_Language_Italian: "🇮🇹 Italien",
  Tags_Language_Japanese: "🇯🇵 Japonais",
  Tags_Language_Korean: "🇰🇷 Coréen",
  Tags_Language_Polish: "🇵🇱 Polonais",
  Tags_Language_Portuguese: "🇵🇹🇧🇷 Portugais",
  Tags_Language_Russian: "🇷🇺 Russe",
  Tags_Language_Spanish: "🇪🇸🇦🇷 Espagnol",
  Tags_Language_Thai: "🇹🇭 Thaïlandais",
  Tags_Language_Turkish: "🇹🇷 Turc",
  Tags_Language_Vietnamese: "🇻🇳 Vietnamien",
  Tags_Others: "Autres",
  // [SECTION]: Annotations
  Annotations_ViewProgress: "Progression",
  Annotations_ViewProgressDescription: "Un indicateur de la progression de la lecture ou du visionnage",
  Annotations_ViewProgress_None: '-',
  Annotations_ViewProgress_NoneDescription: "Pas encore lu/vu",
  Annotations_ViewProgress_Viewed: 'x',
  Annotations_ViewProgress_ViewedDescription: "Déjà lu/vu",
  Annotations_ViewProgress_Current: 'o',
  Annotations_ViewProgress_CurrentDescription: "Lecture/Visionnage en cours",
  // [SECTION]: Trackers
  Tracker_Kitsu_Settings_Username: "Nom d’utilisateur",
  Tracker_Kitsu_Settings_UsernameInfo: "Nom d'utilisateur pour la connexion automatique à Kitsu",
  Tracker_Kitsu_Settings_Password: "Mot de passe",
  Tracker_Kitsu_Settings_PasswordInfo: "Mot de passe pour la connexion automatique à Kitsu",
  // [SECTION]: Plugins (common)
  Plugin_Settings_ThrottlingDownloads: "Limitation de la vitesse de téléchargement [ms]",
  Plugin_Settings_ThrottlingDownloadsInfo: '...',
  Plugin_Settings_ThrottlingInteraction: "Taux limite d'interaction [requêtes/minute]",
  Plugin_Settings_ThrottlingInteractionInfo: "Limiter le nombre de requêtes sur ce site pour éviter d'être bloqué ou banni",
  Plugin_Settings_UrlOverride: "Surcharge de l'URL",
  Plugin_Settings_UrlOverrideInfo: "Utiliser cette URL comme domaine actuel pour ce site web",
  Plugin_Settings_ImageFormat: "Format d'image préféré",
  Plugin_Settings_ImageFormatInfo: "Télécharger les images en utilisant ce format de fichier si possible",
  Plugin_Common_MangaIndex_NotSupported: "Impossible de créer un index de contenu pour ce site web. Utiliser la fonctionnalité Copier-Coller pour accéder directement au contenu d'une URL spécifique !",
  Plugin_Common_Chapter_UnavailableError: "Le chapitre n'est pas disponible (non acheté/déverrouillé/public) !",
  Plugin_Common_Chapter_InvalidError: "Échec de l'extraction des pages du contenu du chapitre !",
  Plugin_Common_Preferred_Language: "Langue préférée pour le site web",
  Plugin_Common_Preferred_LanguageInfo: "Langue préférée pour le contenu du site Web.",
  Plugin_MissingWebsite_UpdateError: "Échec de la mise à jour de l'index de contenu pour un site Web inexistant !",
  Plugin_MissingWebsiteEntry_UpdateError: "Échec de la mise à jour de l'index des médias pour un site web inexistant !",
  // [SECTION]: Plugins (specific)
  Plugin_CopyManga_Settings_GlobalCDN: "Utiliser le CDN global",
  Plugin_CopyManga_Settings_GlobalCDNInfo: "Requête du CDN Global",
  Plugin_CuuTruyen_Error_NotProcessed: "Ce chapitre est encore en cours de traitement, veuillez réessayer plus tard.",
  Plugin_PocketComics_LanguageMismatchError: "Impossible de trouver le manga {0} pour la langue sélectionnée {1}",
  Plugin_SheepScanlations_Settings_Username: "Nom d’utilisateur",
  Plugin_SheepScanlations_Settings_UsernameInfo: "Nom d'utilisateur pour la connexion automatique à Sheep-Scanlations 😉",
  Plugin_SheepScanlations_Settings_Password: "Mot de passe",
  Plugin_SheepScanlations_Settings_PasswordInfo: "Mot de passe pour la connexion automatique à Sheep-Scanlations 😉"
};
export default translations;