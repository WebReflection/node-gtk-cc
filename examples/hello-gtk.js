#!/usr/bin/env node

var
  GNode = require('../lib/'),
  Gtk = GNode.importNS('Gtk'),
  settings,
  win
;

GNode.startLoop();
Gtk.init(null);

settings = Gtk.Settings.getDefault(),
settings.gtkApplicationPreferDarkTheme = true;
settings.gtkThemeName = "Adwaita";

console.log(settings.gtkEnableAccels);

win = new Gtk.Window({
  title: 'node-gtk',
  windowPosition: Gtk.WindowPosition.CENTER
});

win.connect('show', Gtk.main);
win.connect('destroy', Gtk.mainQuit);

win.setDefaultSize(200, 80);
win.add(new Gtk.Label({label: 'Hello Gtk+'}));

win.showAll();
