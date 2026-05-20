# Changelog

All notable changes to Zentris Billing are documented here.

## [1.1.0] - 2026-05-21

### Added
- Invoice generation engine
- HTML invoice template
- PDF invoice export
- CSV invoice export
- JSON invoice export
- End-to-end invoice testing using `test-invoice.ts`
- Dist build validation

### Improved
- Separated exporters from billing core
- Added template structure for invoices

### Fixed
- Fixed HtmlExporter import issue
- Fixed PDF blob generation flow
- Fixed CommonJS top-level await issue

---

## [1.0.27] - 2026-05-20

### Added
- GitHub Trusted Publisher integration
- OIDC publishing
- npm provenance support
- Automated publish workflow

### Fixed
- npm EOTP authentication issue
- npm Trusted Publisher setup
- GitHub Action auth flow

---

## [1.0.0] - 2026-05-20

### Added
- GST calculations
- Discount calculations
- Currency formatter
- Initial billing APIs