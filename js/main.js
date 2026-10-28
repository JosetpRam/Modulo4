$(function () {
  var $modal = $('#demoModal');
  var $trigger = $('#openModalBtn');
  var originalClasses = 'btn btn-success btn-lg';

  // Eventos oficiales de Bootstrap 4 para el ciclo de vida del modal.
  $modal.on('show.bs.modal', function () {
    console.log('[Modal] show.bs.modal: comienza a abrirse');
    $trigger.prop('disabled', true)
      .removeClass('btn-success')
      .addClass('btn-danger')
      .attr('aria-disabled', 'true');
  });

  $modal.on('shown.bs.modal', function () {
    console.log('[Modal] shown.bs.modal: terminó de abrirse');
  });

  $modal.on('hide.bs.modal', function () {
    console.log('[Modal] hide.bs.modal: comienza a ocultarse');
  });

  $modal.on('hidden.bs.modal', function () {
    console.log('[Modal] hidden.bs.modal: terminó de ocultarse');
    $trigger.prop('disabled', false)
      .attr('class', originalClasses)
      .removeAttr('aria-disabled');
  });
});
