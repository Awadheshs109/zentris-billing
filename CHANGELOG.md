# Changelog

All notable changes to Zentris Billing are documented here.

---

## [1.1.0] - 2026-05-21

### Added
- Invoice generation engine
- HTML invoice template
- PDF invoice export
- CSV invoice export
- JSON invoice export
- End-to-end invoice testing using `test-invoice.ts`
- Dist build validation
- InvoiceGenerator public API
- Browser + Node invoice support

### Improved
- Separated exporters from billing core
- Added invoice template architecture
- Added output folder generation for local testing

### Fixed
- Fixed HtmlExporter import issue
- Fixed PDF blob generation flow
- Fixed CommonJS top-level await issue
- Fixed file lock issue for generated CSV files

---

## [1.0.27] - 2026-05-20

### Added
- GitHub Trusted Publisher integration
- OIDC publishing support
- npm provenance support
- Automated GitHub Actions publish flow

### Fixed
- npm EOTP authentication issue
- Trusted Publisher setup issue
- GitHub Action auth configuration

---

## [1.0.0] - 2026-05-20

### Added
- GST calculation APIs
- Discount calculation APIs
- Currency formatting support
- Initial billing APIs
- TypeScript package setup