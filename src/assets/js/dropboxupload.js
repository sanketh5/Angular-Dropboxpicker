function launchDropBoxPicker(){
    options = {
        // Required. Called when a user selects an item in the Chooser.
        success: function(files) {
            DropBoxFilesReference.receiveDropBoxFiles(files);
        },
        // Optional. Called when the user closes the dialog without selecting a file and does not include any parameters.
        cancel: function() {
            console.log("cancel")
        },
        linkType: "direct", 
        multiselect: true, 
        extensions: ['*'],
        folderselect: false,
    };
    return Dropbox.choose(options);
}

var DropBoxFilesReference = null;