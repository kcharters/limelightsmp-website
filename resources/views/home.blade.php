@extends('layouts.layout')
@extends('layouts.header')
@section('content')
<div class="row pt-5">
    @foreach ($members as $limes)
        @if ($limes->enabled == '1')
                <div class="col-sm-3 mb-3 d-flex align-items-stretch">
                    <div class="card" style="width: 340px">
                        <img src={{ asset('/assets/img/Website-Skins/' . $limes->name . '.png') }} class="card-img-top"
                            alt="...">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">{{ $limes->name }}</h5>
                            @foreach (explode(',', $limes->links) as $links)
                                <p class="card-text mb-4">{{ $links }}</p>
                            @endforeach
                        </div>

                    </div>
                </div>
            
        @endif
    @endforeach
</div>
@stop
