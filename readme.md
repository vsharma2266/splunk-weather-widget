If you are in VPN, either access the website directly or add this host in your hosts file.
For mac from you terminal:
  - sudo vi /etc/hosts
  - Press i to go in edit mode
  - Add following with rest of your local host.
  >127.0.0.1       weather-app.org

For windows follow these instructions:
  https://www.hostinger.com/tutorials/fix-dns_probe_finished_nxdomain (Go to point number 5)

Clone the application:
git clone https://github.com/vsharma2266/splunk-weather-widget.git

Start the application:
npm run bs

