module.exports = {
  name: 'main-window',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/main-window',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
