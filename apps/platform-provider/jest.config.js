module.exports = {
  name: 'platform-provider',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/platform-provider',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
