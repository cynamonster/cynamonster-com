const zip = new JSZip();
const count = 0;
const zipFilename = "images-cynamonster.zip";

const urlZip = (props) => {
    let {urls, filename} = this.props;

    urls.forEach(function(url){
        JSZipUtils.getBinaryContent(url, function (err, data) {
            if(err) {
               throw err; // or handle the error
            }
            zip.file(filename, data, {binary:true});
            count++;
            if (count == urls.length) {
              var zipFile = zip.generate({type: "blob"});
              saveAs(zipFile, zipFilename);
            }
         });
    })
};

const 

