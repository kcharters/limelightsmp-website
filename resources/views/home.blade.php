@extends('layout')
@section('content')

    <div class="intro-header">
        <div class="bg-image parallax-bg"></div>
        <div class="header-content row">
            <img src="{{ asset('storage/images/Limelight with lime.png') }}" class="">
        </div>
    </div>
    <div class="content">

        <div class="container header-buttons">
            <div class="row">
                <div class="col-sm-3">
                    Season 2 is live!

                    This link will show you the

                    YouTube playlist with all team member episodes & content.
                </div>
                <div class="col-sm-3">
                    Discord Community

                    Hang out and get updates on our public Discord: open to our friends, fans, & fellow creators.
                </div>
                <div class="col-sm-3">
                    Supporting Limelight

                    If you'd like to pitch in to help us with server costs, we'd be grateful for any tips &
                    contributions.
                </div>
            </div>
        </div>
        <div class=" header-text">
            <div class="row">
                Limelight SMP • The Team
                Limelight is a 100% content creator server where every member is equal.

                Our mission statement is community, creativity, content... & a little chaos.

                Meet the cast!
            </div>
        </div>
        </header>
        <div class="container">
            @foreach ($contents as $items)
                <div class="row">
                    @foreach ($items as $item)
                        @if ($item['enabled'] == 1)
                            <div class="col-sm-3">
                                <div class="card " style="width: 18rem;">
                                    <img class="card"
                                        src="{{ asset('storage/images/skins/' . $item['name'] . '.png') }}"
                                        alt="article-card">
                                    <div class="article-card">
                                        <h5 class="article-card title">{{ $item['name'] }}</h5>
                                        @foreach (explode(',', $item['links']) as $info)
                                            @if (str_contains($info, 'youtube'))
                                                <a href="{{ $info }}">
                                                    <i class="fa-brands fa-youtube fa-2xl"></i></a>
                                            @endif
                                            @if (str_contains($info, 'twitch'))
                                                <a href="{{ $info }}">
                                                    <i class="fa-brands fa-twitch fa-2xl"></i></a>
                                            @endif
                                            @if (str_contains($info, 'tiktok'))
                                                <a href="{{ $info }}">
                                                    <i class="fa-brands fa-tiktok fa-2xl"></i></a>
                                            @endif
                                            @if (str_contains($info, 'tumblr'))
                                                <a href="{{ $info }}">
                                                    <i class="fa-brands fa-tumblr fa-2xl"></i></a>
                                            @endif
                                            @if (str_contains($info, 'instagram'))
                                                <a href="{{ $info }}">
                                                    <i class="fa-brands fa-instagram fa-2xl"></i></a>
                                            @endif
                                            @if (str_contains($info, 'link'))
                                                <a href="{{ $info }}">
                                                    <i class="fa-solid fa-asterisk fa-2xl"></i></a>
                                            @endif
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        @endif
                    @endforeach
                </div>
            @endforeach

        </div>
    </div>
@stop
