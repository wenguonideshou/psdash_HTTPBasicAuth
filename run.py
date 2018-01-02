#coding:utf-8
import time
import gevent
from gevent.monkey import patch_all
patch_all()

from gevent.pywsgi import WSGIServer
import locale
import argparse
import logging
import socket
import urllib
import urllib2
from logging import getLogger
from flask import Flask
import zerorpc
from psdash import __version__
from psdash.node import LocalNode, RemoteNode
from psdash.run import PsDashRunner
from datetime import datetime, timedelta

logger = getLogger('psdash.run')


class DashRunner(PsDashRunner):
    def _create_app(self, config=None):
        app = Flask(__name__)
        #app.debug=True
        from web import fromtimestamp
        app.add_template_filter(fromtimestamp)
        app.config.PSDASH_REGISTER_INTERVAL = 10
        app.psdash = self
        app.config.from_envvar('PSDASH_CONFIG', silent=True)
        if config and isinstance(config, dict):
            app.config.update(config)
        self._load_allowed_remote_addresses(app)
        # If the secret key is not read from the config just set it to something.
        if not app.secret_key:
            app.secret_key = 'whatisthissourcery'
        from web import webapp
        prefix = app.config.get('PSDASH_URL_PREFIX')
        if prefix:
            prefix = '/' + prefix.strip('/')
        webapp.url_prefix = prefix
        app.register_blueprint(webapp)
        return app


def main():
    r=DashRunner.create_from_cli_args()
    r.run()


if __name__ == '__main__':
    main()
