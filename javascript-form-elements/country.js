        // $(document).ready(function() {
        //     $('#country').change(function() {
        //         if ($('#country').prop("selected")) {
        //             if(country === 'America') {
        //                 $.ajax({
        //                         url:
        //                         success: function(data) {

        //                         }
        //                 });
        //             }
        //             else {

        //             }
        //         }
           
        //     });
        // });

        $(document).ready(function() {
            $("select.country").change(function() {
                if ($('#country').prop("selected")) {
                    $("#america").show();
                    $("#india").hide();
                }
            });
        });
