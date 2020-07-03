const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: 'build/messages/',
  translationsDirectory: 'src/translations/',
  languages: ['en', 'ru'],
  whitelistsDirectory: 'src/translations/whitelists'
});